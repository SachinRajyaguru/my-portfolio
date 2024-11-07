const Home = () => {
  const sectionProfile = [
    "Experience crafting dynamic and responsive mobile experiences using React Native.",
    "Expertise in both frontend and light backend development (Node.js & SQL) for comprehensive project handling.",
    "Strong focus on user experience (UX): I design apps that are intuitive, user-friendly, and deeply connect with your target audience.",
    "Cross-platform development: I build seamless apps that function flawlessly on both iOS and Android devices.",
    "",
  ];

  return (
    <div>
      <h1 className="text-left mt-4 font-serif">Sachin Rajyaguru</h1>
      <h2 className="text-left mt-2 font-sans">
        Mobile App Developer | React Native Dev | Android & iOS
      </h2>
      <ul className="list-disc pl-4 mt-4">
        {sectionProfile.map((item, index) => (
          <li key={index} className="text-sm leading-6 text-left">
            {item}
          </li>
        ))}
      </ul>
      <table className="table-fixed border border-collapse border-slate-500">
        <caption className="caption-top">
          My personal details about in the table
        </caption>
        <thead>
          <tr>
            <th className="border border-slate-600">Details Title</th>
            <th className="border border-slate-600">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Known Language</td>
            <td>English | Hindi | Gujarati</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
