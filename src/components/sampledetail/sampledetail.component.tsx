import { Sample } from "@/services/api";

export default function SampleDetail(sample: Sample) {
  return (
    <div className="flex flex-col">
      <div className="items-center justify-between">
        <div className="grid md:grid-cols-6 md:gap-4">
          <div className="col-start-0 col-span-12 md:col-start-1 md:col-span-6 lg:col-start-1 lg:col-span-6">
            <div className="card hover:shadow-lg">
              <div className="card-body">
                <div>
                  <div className="px-4 sm:px-0">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      {sample.sampleId ? (
                        `${sample.sampleId}`
                      ) : (
                        <div>Template id</div>
                      )}
                    </h3>
                    <span className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                      {sample.category}
                    </span>
                  </div>
                  <div className="mt-6 border-t border-gray-300">
                    <div className="divide-y divide-gray-200">
                      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <div className="text-sm font-medium leading-6 text-gray-900">
                          Collection Details
                        </div>
                        <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-100">
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Collector Name
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.collectorName ? (
                                `${sample.collectorName}`
                              ) : (
                                <div className="text-gray-300"> --N/A-- </div>
                              )}
                            </div>
                          </div>

                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Advisor Name
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.advisorName ? (
                                `${sample.advisorName}`
                              ) : (
                                <div className="text-gray-300"> --N/A-- </div>
                              )}
                            </div>
                          </div>

                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Collection Year
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.collectionYear ? (
                                `${sample.collectionYear}`
                              ) : (
                                <div className="text-gray-300"> --N/A-- </div>
                              )}
                            </div>
                          </div>
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Collection Reason
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.collectionReason &&
                              sample.collectionReason.length > 0 ? (
                                `${sample.collectionYear}`
                              ) : (
                                <div className="text-gray-300"> --N/A-- </div>
                              )}
                            </div>
                          </div>
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Collection Site Coordinates
                              {sample.locationMarkerlat ? " (Marker)" : ""}
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              <div>
                                lat:
                                {sample.locationMarkerlat ? (
                                  `${sample.locationMarkerlat}`
                                ) : (
                                  <span className="text-gray-300 justify-self-end">
                                    {" "}
                                    xx.xxxx{" "}
                                  </span>
                                )}
                              </div>
                              <div>
                                lng:
                                {sample.locationMarkerlng ? (
                                  `${sample.locationMarkerlng}`
                                ) : (
                                  <span className="text-gray-300 justify-self-end">
                                    {" "}
                                    xx.xxxx{" "}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <div className="text-sm font-medium leading-6 text-gray-900">
                          Sample Details
                        </div>
                        <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-100">
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Short Description
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.shortDescription ? (
                                `${sample.shortDescription}`
                              ) : (
                                <div className="text-gray-300"> --N/A-- </div>
                              )}
                            </div>
                          </div>

                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Type (s)
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.sampleType &&
                              sample.sampleType.length > 0 ? (
                                `${sample.sampleType.join(", ")}`
                              ) : (
                                <div className="text-gray-300"> --N/A-- </div>
                              )}
                            </div>
                          </div>

                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Form (s)
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.sampleForm &&
                              sample.sampleForm.length > 0 ? (
                                `${sample.sampleForm.join(", ")}`
                              ) : (
                                <div className="text-gray-300"> --N/A-- </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <div className="text-sm font-medium leading-6 text-gray-900">
                          Storage Details
                        </div>
                        <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 divide-y divide-gray-100">
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Building
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.storageBuilding ? (
                                `${sample.storageBuilding}`
                              ) : (
                                <div className="text-gray-300"> --N/A-- </div>
                              )}
                            </div>
                          </div>
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Room
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.storageRoom ? (
                                `${sample.storageRoom}`
                              ) : (
                                <div className="text-gray-300"> --N/A-- </div>
                              )}
                            </div>
                          </div>
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Extra Details
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.storageDetails ? (
                                `${sample.storageDetails}`
                              ) : (
                                <div className="text-gray-300"> --N/A-- </div>
                              )}
                            </div>
                          </div>
                          <div className="px-2 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <div className="text-sm font-medium leading-6 text-gray-900">
                              Duration
                            </div>
                            <div className="mt-1 text-sm justify-self-end leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                              {sample.storageDuration ? (
                                `${sample.storageDuration}`
                              ) : (
                                <div className="text-gray-300"> --N/A-- </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
