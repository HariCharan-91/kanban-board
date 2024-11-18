import React, { useEffect, useState } from "react";
import { groupTickets, sortTickets } from "../utils/ticketUtils";
import priorityIcons from "../utils/priorityIcons";
import statusIcons from "../utils/statusIcons";
import Card from "./Card";
import "../styles/kanbanboard.css";
import addicon from "../assets/icons/add.svg";
import menu from "../assets/icons/3 dot menu.svg";
import userimage from "../assets/images/user.png";
import userImages from "../utils/userImage";

const KanbanBoard = ({ grouping, ordering }) => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [groupedTickets, setGroupedTickets] = useState({});

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setTickets(data.tickets || []);
        setUsers(data.users || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (tickets.length > 0) {
      const grouped = groupTickets(tickets, grouping);
      const sorted = Object.keys(grouped).reduce((acc, group) => {
        acc[group] = sortTickets(grouped[group], ordering);
        return acc;
      }, {});

      const sortedGroupedTickets = Object.entries(sorted).sort((a, b) =>
        a[0].localeCompare(b[0])
      );

      setGroupedTickets(Object.fromEntries(sortedGroupedTickets));
    }
  }, [tickets, grouping, ordering]);

  if (loading) {
    return <div>Loading tickets...</div>;
  }

  const getColumnHeader = (group) => {
    const normalizedGroup = group.trim().toLowerCase();

    if (grouping === "User") {
      const user = users.find((user) => user.id === group);
      return user
        ? {
            label: user.name,
            icon: userImages[user.id] || userimage,
            available: user.available || false,
          }
        : { label: "Unknown User", icon: statusIcons.todo, available: false };
    } else if (grouping === "Priority") {
      const priority = priorityIcons[group];
      return priority
        ? { label: priority.name, icon: priority.icon }
        : { label: "Unknown Priority", icon: statusIcons.todo };
    } else if (grouping === "Status") {
      return {
        label: group,
        icon: statusIcons[normalizedGroup] || statusIcons.inprogress,
      };
    }
    return { label: group, icon: statusIcons.todo };
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => {
        const header = getColumnHeader(group);
        return (
          <div key={group} className="kanban-column">
            <div className="column-header">
              <div className="column-left">
                {header.icon && (
                  <div className="avatar-container">
                    <img
                      src={header.icon}
                      alt="group icon"
                      className="group-avatar"
                    />
                    {header.available && (
                      <div className="availability-indicator"></div>
                    )}
                  </div>
                )}
                <p>{header.label}</p>
                <h6>{groupedTickets[group].length}</h6>
              </div>

              <div className="column-right">
                <img src={addicon} alt="add icon" />
                <img src={menu} alt="menu icon" />
              </div>
            </div>

            <div className="tickets-container">
              {groupedTickets[group].map((ticket) => {
                const user = users.find((user) => user.id === ticket.userId);
                return (
                  <Card
                    key={ticket.id}
                    ticket={ticket}
                    user={user || { name: "N/A", avatar: "" }}
                    isGroupedByUser={grouping === "User"}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;
