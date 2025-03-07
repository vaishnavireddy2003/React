import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import "./DragAndDrop.css";

const initialPlayers = [
  "Rohit Sharma", "Shubman Gill", "Virat Kohli", "Shreyas Iyer", "Riyan Parag",
  "Rishabh Pant", "KL Rahul", "Hardik Pandya", "Ravindra Jadeja", "Nitish Kumar Reddy",
  "Axar Patel", "Jasprit Bumrah", "Mohammed Siraj", "Arshdeep Singh", 
  "Varun Chakravarthy", "Kuldeep Yadav", "Mohammed Shami", "Abhishek Sharma"
];

const DragAndDrop = () => {
  const [columns, setColumns] = useState({
    players: initialPlayers,
    batters: [],
    bowlers: [],
    allrounders: [],
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      const updatedList = Array.from(columns[source.droppableId]);
      const [movedItem] = updatedList.splice(source.index, 1);
      updatedList.splice(destination.index, 0, movedItem);

      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: updatedList,
      }));
    } else {
      const sourceList = Array.from(columns[source.droppableId]);
      const destList = Array.from(columns[destination.droppableId]);
      const [movedItem] = sourceList.splice(source.index, 1);
      destList.splice(destination.index, 0, movedItem);

      setColumns((prev) => ({
        ...prev,
        [source.droppableId]: sourceList,
        [destination.droppableId]: destList,
      }));
    }
  };

  return (
    <div className="container">
      <h2>Indian Cricket Team Player Categorization</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns">
          {Object.keys(columns).map((category) => (
            <Droppable key={category} droppableId={category}>
              {(provided) => (
                <div className="category" ref={provided.innerRef} {...provided.droppableProps}>
                  <h3>{category.toUpperCase()}</h3>
                  {columns[category].map((player, index) => (
                    <Draggable key={player} draggableId={player} index={index}>
                      {(provided) => (
                        <div 
                          className="item"
                          ref={provided.innerRef} 
                          {...provided.draggableProps} 
                          {...provided.dragHandleProps}
                        >
                          {player}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default DragAndDrop;