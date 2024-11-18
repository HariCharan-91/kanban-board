export const groupTickets = (tickets, groupBy) => {
    const grouped = {};
  
    tickets.forEach((ticket) => {
      let key;
      switch (groupBy) {
        case "Status":
          key = ticket.status;
          break;
        case "User":
          key = ticket.userId;
          break;
        case "Priority":
          key = ticket.priority;
          break;
        default:
          key = "Ungrouped";
      }
  
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(ticket);
    });
  
    return grouped;
  };
  

  export const sortTickets = (tickets, sortBy) => {
    return [...tickets].sort((a, b) => {
      if (sortBy === "Priority") {
        return a.priority- b.priority; // Descending priority
      }
      if (sortBy === "Title") {
        return a.title.localeCompare(b.title); // Alphabetical title
      }
      return 0;
    });
  };
  