"use strict;";

const domGrid = document.querySelector(".grid");

const rawTeamMembers = [
  { fullName: "Wayne Barnett", role: "Founder & CEO", photoSrc: "../img/wayne-barnett-founder-ceo.jpg" },
  { fullName: "Angela Caroll", role: "Chief Editor", photoSrc: "../img/angela-caroll-chief-editor.jpg" },
  { fullName: "Walter Gordon", role: "Office Manager", photoSrc: "../img/walter-gordon-office-manager.jpg" },
  { fullName: "Angela Lopez", role: "Social Media Manager", photoSrc: "../img/angela-lopez-social-media-manager.jpg" },
  { fullName: "Scott Estrada", role: "Developer", photoSrc: "../img/scott-estrada-developer.jpg" },
  { fullName: "Barbara Ramos", role: "Graphic Designer", photoSrc: "../img/barbara-ramos-graphic-designer.jpg" },
];

for (const member of rawTeamMembers) {
  const tempElement = document.createElement("div");
  tempElement.classList.add("flex", "flex-col", "bg-white", "drop-shadow-md", "rounded-xl");
  tempElement.innerHTML = `
  <img src="${member.photoSrc}" class="rounded-t-xl" />
  <div class="flex flex-col p-4 lg:p-6 items-center justify-center">
    <h1 class="font-bold text-lg text-slate-800">${member.fullName}</h1>
    <span class="text-md text-slate-600">${member.role}</span>
  </div>
  `;
  domGrid.appendChild(tempElement);
}
