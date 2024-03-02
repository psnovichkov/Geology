"use client";

import Modal from "@/components/modal/modal.component";
import SampledetailComponent from "@/components/sampledetail/sampledetail.component";
import { API, Sample } from "@/services/api";
import { useEffect, useState } from "react";

type Props = {
  params: {
    id: number;
  };
};

export default function SampleDetailModal({ params }: Props) {
  const [sample, setSample] = useState<Sample>();

  useEffect(() => {
    API.getSample(params.id).then((result) => {
      setSample(result);
    });
  }, [params.id]);

  if (!sample) {
    return (
      <div className="flex flex-col">
        <div className="items-center">Loading...</div>
      </div>
    );
  }

  return (
    <Modal>
      <SampledetailComponent {...sample} />
    </Modal>
  );
}
