import dayjs from "dayjs";

const newDocument = {
  id: Date.now(),
  name: "welcome",
  date: dayjs().format("DD MMMM YYYY h:mm A"),
  content: `# Welcome to Markdown`,
};

export default newDocument;
