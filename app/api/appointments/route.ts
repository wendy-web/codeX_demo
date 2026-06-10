import { NextResponse } from "next/server";
import { getPostgresPool } from "../../../lib/postgres";

export const runtime = "nodejs";

type AppointmentPayload = {
  name?: unknown;
  phone?: unknown;
  visitDate?: unknown;
  pet?: unknown;
  message?: unknown;
};

function readText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateAppointment(payload: AppointmentPayload) {
  const customerName = readText(payload.name);
  const phone = readText(payload.phone);
  const visitDate = readText(payload.visitDate);
  const petType = readText(payload.pet);
  const note = readText(payload.message);
  const visitAt = new Date(visitDate);

  if (!customerName || customerName.length > 50) {
    return { error: "请填写 1-50 个字的称呼。" };
  }

  if (phone.length < 5 || phone.length > 30) {
    return { error: "请填写正确的联系电话。" };
  }

  if (!visitDate || Number.isNaN(visitAt.getTime())) {
    return { error: "请选择有效的到店时间。" };
  }

  if (!petType) {
    return { error: "请选择宠物类型。" };
  }

  if (note.length > 500) {
    return { error: "护理需求最多填写 500 个字。" };
  }

  return {
    data: {
      customerName,
      phone,
      visitAt,
      petType,
      note: note || null,
    },
  };
}

export async function POST(request: Request) {
  let payload: AppointmentPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "提交内容格式不正确。" }, { status: 400 });
  }

  const result = validateAppointment(payload);

  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  try {
    const queryResult = await getPostgresPool().query<{ id: string }>(
      `insert into public.appointments (
        customer_name,
        phone,
        visit_at,
        pet_type,
        note
      ) values ($1, $2, $3, $4, $5)
      returning id`,
      [
        result.data.customerName,
        result.data.phone,
        result.data.visitAt.toISOString(),
        result.data.petType,
        result.data.note,
      ],
    );

    return NextResponse.json({
      id: queryResult.rows[0].id,
      message: "预约已提交，我们会尽快联系您确认时间。",
    });
  } catch (error) {
    console.error("Failed to create appointment", error);

    return NextResponse.json(
      { error: "预约暂时提交失败，请稍后再试或电话联系门店。" },
      { status: 500 },
    );
  }
}
