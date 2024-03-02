"use client";
import SampledetailComponent from "@/components/sampledetail/sampledetail.component";
import { API, Sample } from "@/services/api";
import { useEffect, useState } from "react";

type Props = {
  params: {
    id: number;
  };
  sample: Sample;
};

export default function MapSampleDetails({
  params,
  sample: initSample,
}: Props) {
  const [sample, setSample] = useState<Sample>(initSample);

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

  return <SampledetailComponent {...sample} />;
}
