import React, { useState } from "react";

function projectListings() {
  // use state for new projects states
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "project one title",
      desc: "project one description",
    },
    {
      id: 2,
      title: "project two title",
      desc: "project two description",
    },
  ]);

  // Sub function to go on in and add a new project to the grid
  const addProject = () => {
    const newProject = [
      { id: projects.length + 1, name: `Project ${projects.length + 1}` },
    ];
    setProjects([...projects, newProject]);
  };

  // Second sub function to remove projects:
  const removeProject = (projectId) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  return (
    <div>
      {projects.map((project) => {
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>;
      })}
    </div>
  );
}
