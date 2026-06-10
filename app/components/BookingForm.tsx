"use client";

import { FormEvent, useState } from "react";
import VisitDateTimeInput from "./VisitDateTimeInput";

type SubmitState =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setSubmitState({ type: "idle", message: "" });

    const formData = new FormData(form);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          visitDate: formData.get("visitDate"),
          pet: formData.get("pet"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error || "预约暂时提交失败。");
      }

      setSubmitState({
        type: "success",
        message: data.message || "预约已提交，我们会尽快联系您确认时间。",
      });
      form.reset();
    } catch (error) {
      setSubmitState({
        type: "error",
        message: error instanceof Error ? error.message : "预约暂时提交失败。",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="booking" id="booking" onSubmit={handleSubmit}>
      <h3>快速预约</h3>
      <div className="form-row">
        <label htmlFor="name">您的称呼</label>
        <input id="name" name="name" placeholder="例如：王女士" required />
      </div>
      <div className="form-row">
        <label htmlFor="phone">联系电话</label>
        <input id="phone" name="phone" type="tel" placeholder="请输入手机号" required />
      </div>
      <div className="form-row">
        <label htmlFor="visitDate">期望到店时间</label>
        <VisitDateTimeInput />
      </div>
      <div className="form-row">
        <label htmlFor="pet">宠物类型</label>
        <select id="pet" name="pet">
          <option>小型犬</option>
          <option>中大型犬</option>
          <option>猫咪</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="message">护理需求</label>
        <textarea id="message" name="message" placeholder="例如：洗澡、修毛、毛结比较多" />
      </div>
      {submitState.message ? (
        <p className={`form-message ${submitState.type}`} role="status">
          {submitState.message}
        </p>
      ) : null}
      <button className="button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "提交中..." : "提交预约"}
      </button>
    </form>
  );
}
