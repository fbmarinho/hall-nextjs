"use client";
import styles from "./page.module.css";
import IconSelector from "../../../components/iconselector/iconselector";
import { create } from "@/app/actions/link";
import SubmitButton from "@/app/components/submitbutton/submitButton";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";

export default function Page() {
  const [formState, formAction] = useFormState(create, {
    message: "",
    error: "",
  });

  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formState.message === "added") {
      ref.current?.reset();
    }
  }, [formState]);

  return (
    <main className={styles.request}>
      <form ref={ref} action={formAction} method="POST">
        <div className={styles.full}>
          <div className={styles.half}>
            <label htmlFor="icon">Icon:</label>
            <IconSelector />
          </div>
          <div className={styles.half}>
            <label htmlFor="type">Type:</label>
            <select name="type">
              <option value="none">Direct access</option>
              <option value="auth">Needs email authentication</option>
              <option value="vpn">Needs to be in VPN</option>
              <option value="br">Only work in client network</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="label">Label:</label>
          <input type="text" name="label" placeholder="ex: Google" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" name="description" placeholder="ex: Search stuff" />
        </div>
        <div>
          <label htmlFor="url">URL:</label>
          <input type="text" name="href" placeholder="ex: http://www.google.com" />
        </div>
        <SubmitButton pendingText="Adding your request..." iddleText="Request new link" />
        <pre className={styles.debug}>{JSON.stringify(formState, null, 2)}</pre>
      </form>
    </main>
  );
}
