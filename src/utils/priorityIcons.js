import highPriorityIcon from "../assets/icons/Img - High Priority.svg";
import mediumPriorityIcon from "../assets/icons/Img - Medium Priority.svg";
import lowPriorityIcon from "../assets/icons/Img - Low Priority.svg";
import noPriorityIcon from "../assets/icons/No-priority.svg";
import urgentPriorityIcon from "../assets/icons/SVG - Urgent Priority colour.svg";

const priorityDetails = {
  4: { name: "Urgent", icon: urgentPriorityIcon },
  3: { name: "High", icon: highPriorityIcon },
  2: { name: "Medium", icon: mediumPriorityIcon },
  1: { name: "Low", icon: lowPriorityIcon },
  0: { name: "No Priority", icon: noPriorityIcon },
};

export default priorityDetails;
