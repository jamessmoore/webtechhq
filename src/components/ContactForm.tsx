"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmail, type EmailState } from "@/app/actions/sendEmail";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="blade-btn">
      {pending ? "TRANSMITTING..." : "TRANSMIT"}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useActionState<EmailState, FormData>(sendEmail, null);

  if (state?.success) {
    return (
      <p className="blade-body-text text-center">
        MESSAGE RECEIVED. I WILL BE IN TOUCH.
      </p>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-6 w-full max-w-lg">
      <div className="flex flex-col gap-2">
        <label className="blade-field-label">NAME</label>
        <input
          name="name"
          type="text"
          required
          className="blade-input"
          autoComplete="name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="blade-field-label">EMAIL ADDRESS</label>
        <input
          name="email"
          type="email"
          required
          className="blade-input"
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="blade-field-label">MESSAGE</label>
        <textarea
          name="message"
          required
          rows={6}
          className="blade-input blade-textarea"
        />
      </div>

      {state?.success === false && (
        <p className="blade-error">{state.error}</p>
      )}

      <SubmitButton />
    </form>
  );
}
