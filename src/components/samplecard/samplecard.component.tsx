import { Sample } from "../../services/api";

type Property = {
  label: string;
  value: string;
};

export default function samplecard(sample: Sample) {
  // const properties: Property[] = [];
  // for (const [key, value] of Object.entries(sample)) {
  //   console.log(`Key: ${key}, Value: ${value}`);
  //   if (
  //     value &&
  //     key != "longDescription" &&
  //     key != "id" &&
  //     key != "collectionLocation"
  //   ) {
  //     let prop: Property = {
  //       label: key,
  //       value: value,
  //     };
  //     properties.push(prop);
  //   }
  // }
  return (
    <div className="w-full">
      <div className="flex items-stretch">
        <div className="basis-full">
          <div className=""></div>
        </div>
      </div>
      <a
        href="#"
        className="flex flex-col items-stretch bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/sample_image.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <span className="font-thin">ID: </span>
            <span>{sample.sampleId}</span>
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-thin">Category: </span>
            <span>{sample.category}</span>
          </p>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="font-thin">Description: </span>
            <span>{sample.longDescription}</span>
          </p>
        </div>
      </a>
    </div>
  );
}
