function ProjectCard({
  title,
  category,
  description,
  image,
  ios_link,
  android_link,
}: {
  title: string;
  category: string;
  description: string[];
  image: string;
  ios_link: string;
  android_link: string;
}) {
  return (
    <div className="text-left bg-gray-100 rounded-lg shadow-md overflow-hidden">
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-2xl font-medium leading-6 text-gray-900 mt-4 ">
          {title}
          <p className="mt-1 text-sm text-gray-500">{category}</p>
        </h1>
        <dl className="mt-4 divide-y divide-gray-300">
          <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Description
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <ul className="list-disc pl-4">
                {description.map((item, index) => (
                  <li key={index} className="text-sm leading-6 text-left">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          {ios_link && (
            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                iOS Link
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <a
                  href={ios_link}
                  className="text-indigo-600 hover:text-indigo-500 underline"
                >
                  View on App Store
                </a>
              </dd>
            </div>
          )}
          {android_link && (
            <div className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Android Link
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <a
                  href={android_link}
                  className="text-indigo-600 hover:text-indigo-500 underline"
                >
                  View on Google Play
                </a>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}

export default ProjectCard;
