"use client";

import { CreateForm } from "@/components/dashboard/create";
import React, { useState } from "react";

export default function Page() {
  let [open, setOpen] = useState(false);
  return <CreateForm setOpen={setOpen} />;
}
