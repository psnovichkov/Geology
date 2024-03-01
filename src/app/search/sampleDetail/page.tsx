"use client";
import { Sample } from "@/services/api";
import { useEffect, useState } from "react";
import sampleDetail from "../../../mock/sampleDetail.json";
import Image from "next/image";

export default function SampleDetail() {
  const [sample, setSample] = useState<Sample>();

  useEffect(() => {
    setSample(sampleDetail);
  }, []);

  if (!sample) {
    return <div>Loading...</div>;
  }

  return <div></div>;
}
