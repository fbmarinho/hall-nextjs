"use client";
import { useFormStatus } from "react-dom";
import styles from "./submitbutton.module.css";

export default function submitButton({ pendingText, iddleText }: { pendingText: string; iddleText: string }) {
  const { pending } = useFormStatus();

  return (
    <button className={`${styles.submitbutton} ${pending ? styles.disabled : null}`} type="submit" disabled={pending}>
      {pending ? pendingText : iddleText}
    </button>
  );
}
