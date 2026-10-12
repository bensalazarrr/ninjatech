"use client";

import { FormEvent, useState } from "react";
import { ArrowRight } from "./icons";

export function InquiryForm() {
  const [status, setStatus] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const projectType = String(data.get("projectType") || "").trim();
    const timeline = String(data.get("timeline") || "").trim();
    const overview = String(data.get("overview") || "").trim();

    const subject = encodeURIComponent(`Project inquiry from ${name || "a prospective client"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\nTimeline: ${timeline}\n\nProject overview:\n${overview}`,
    );
    setStatus("Your email app is opening with the project details ready to send.");
    window.location.href = `mailto:benedictsalazar64@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <form className="inquiry-form" onSubmit={submit}>
      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Full name" required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
        <label>
          <span>Project type</span>
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option>Business website</option>
            <option>Custom web application</option>
            <option>UI/UX design</option>
            <option>Technology consulting</option>
          </select>
        </label>
        <label>
          <span>Target timeline</span>
          <select name="timeline" defaultValue="" required>
            <option value="" disabled>Select a timeline</option>
            <option>As soon as possible</option>
            <option>Within 1–2 months</option>
            <option>Within 3–6 months</option>
            <option>Flexible / exploring</option>
          </select>
        </label>
      </div>
      <label>
        <span>Project overview & goals</span>
        <textarea name="overview" rows={5} placeholder="Tell us what you want to build, who it is for, and what success looks like." required />
      </label>
      <div className="form-submit-row">
        <button type="submit" className="button button-dark">Request a Consultation <ArrowRight /></button>
        <p className="form-note" role="status">{status || "This opens a pre-filled email—no information is stored on this website."}</p>
      </div>
    </form>
  );
}
