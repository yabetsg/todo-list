(()=>{"use strict";const t=()=>({addButton:document.querySelector(".addButton"),cancelButton:document.querySelector(".cancelButton"),addProjectButton:document.querySelector(".addProjectButton"),addTaskButton:document.querySelector(".addTaskButton"),projectFormContainer:document.querySelector(".projectFormContainer"),todoFormContainer:document.querySelector(".todoFormContainer"),projectList:document.querySelector(".projectList"),projectForm:document.querySelector(".projectForm"),todoForm:document.querySelector(".todoForm"),projectNameInput:document.querySelector(".projectNameInput"),todoTaskInput:document.querySelector(".todoTaskInput"),taskList:document.querySelector(".tasks"),allTaskLists:document.querySelector(".todoTitle"),projectNameContainer:document.querySelector(".projectNameContainer"),mainTitle:document.querySelector(".mainTitle")});class e{constructor(t,e){this.title=t,this.name=e,this.list=[],this.list2=[]}getTitle(){return this.title}setTitle(t){this.title=t}getName(){return this.name}setName(t){this.name=t}setNameList(t){this.list.push(t)}setTitleList(t){this.list2.push(t)}getDueDate(){return this.dueDate}setDueDate(){this.dueDate=this.dueDate}}const o=t().addProjectButton,n=t().projectFormContainer,s=t().addTaskButton,i=t().todoFormContainer,r=t().todoForm,c=t().projectForm,a=t().projectList,l=t().projectNameInput,d=t().todoTaskInput,u=t().taskList,m=(t().projectNameContainer,t().mainTitle);t().allTaskLists;let p=0;o.addEventListener("click",(()=>{i.classList.remove("active"),n.classList.add("active")})),s.addEventListener("click",(()=>{n.classList.remove("active"),i.classList.add("active")})),new class{constructor(t){this.title=t,this.list=[]}getTitle(){return this.title}setTitle(t){this.title=t}setList(t){this.list.push(t)}};const h=[],T=((()=>{const t=new e;c.addEventListener("submit",(e=>{p=0;const o=document.createElement("button");o.classList.add("projectNameContainer");const s=document.createElement("i"),i=document.createElement("span");t.setTitle(l.value),i.innerText=t.getTitle(),t.setNameList({tite:t.getTitle()}),o.appendChild(s),o.appendChild(i),a.appendChild(o),h.push({title:t.getTitle()}),console.log(h),n.classList.remove("active"),l.value="",o.classList.contains("projectNameContainer")&&o.addEventListener("click",(t=>{for(;u.firstChild;)u.removeChild(u.firstChild);const e=t.target.innerText;console.log(t.target.innerText),m.innerText=e;for(let t=0;t<h.length;t++){const e=h[t];if(e.title===m.innerText){const t=Object.keys(e);console.log(t.length);for(let o=0;o<t.length;o++)if(null!=e[`task${o}`]){const t=document.createElement("button");t.classList.add("todoTitle"),t.innerText=e[`task${o}`],u.appendChild(t)}console.log(e)}}L()}))}))})(),()=>{const t=new e;for(let e=0;e<h.length;e++){const o=h[e],n=document.createElement("button");n.classList.add("todoTitle"),t.setName(d.value),o.title===m.innerText&&(o[`task${p}`]=t.getName(),n.innerText=o[`task${p}`],u.appendChild(n),console.log(o),p++)}i.classList.remove("active"),d.value=""}),L=()=>{r.addEventListener("submit",T)};L()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEIsRUFBY3dDLE9BQ3ZCYSxFQUFROUMsUUFBVUgsRUFBVXFDLFlBQzVCWSxFQUFRLE9BQU8zQixLQUFXUSxFQUFLbkIsVUFDL0JxQixFQUFPSyxVQUFhWSxFQUFRLE9BQU8zQixLQUNuQ3pCLEVBQVMwQyxZQUFZUCxHQUNyQlEsUUFBUUMsSUFBSVEsR0FDWjNCLElBR1IsQ0FDQS9CLEVBQWtCaUMsVUFBVUMsT0FBTyxVQUNuQzdCLEVBQWN3QyxNQUFRLEVBQUUsR0FHbkJtQixFQUFnQixLQUN6QjdELEVBQVM2QixpQkFBaUIsU0FBVU0sRUFBVyxFQUduRDBCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2VsZWN0b3JzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZEJ1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRCdXR0b25cIiksXG4gICAgY2FuY2VsQnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbEJ1dHRvblwiKSxcbiAgICBhZGRQcm9qZWN0QnV0dG9uOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RCdXR0b25cIiksXG4gICAgYWRkVGFza0J1dHRvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRUYXNrQnV0dG9uXCIpLFxuICAgIHByb2plY3RGb3JtQ29udGFpbmVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm1Db250YWluZXInKSxcbiAgICB0b2RvRm9ybUNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Gb3JtQ29udGFpbmVyJyksXG4gICAgcHJvamVjdExpc3Q6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpLFxuICAgIHByb2plY3RGb3JtOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKSxcbiAgICB0b2RvRm9ybTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9Gb3JtJyksXG4gICAgcHJvamVjdE5hbWVJbnB1dDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3ROYW1lSW5wdXQnKSxcbiAgICB0b2RvVGFza0lucHV0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb1Rhc2tJbnB1dCcpLFxuICAgIHRhc2tMaXN0OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKSxcbiAgICBhbGxUYXNrTGlzdHM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvVGl0bGUnKSxcbiAgICBwcm9qZWN0TmFtZUNvbnRhaW5lcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3ROYW1lQ29udGFpbmVyJyksXG4gICAgbWFpblRpdGxlOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpblRpdGxlJylcblxuICB9O1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLG5hbWUpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmxpc3QyID0gW107XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIHNldFRpdGxlKG5ld1RpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlOyBcbiAgICB9XG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICBzZXROYW1lKG5ld05hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lOyBcbiAgICB9XG4gICAgc2V0TmFtZUxpc3QobmV3TGlzdCl7XG4gICAgICAgIHRoaXMubGlzdC5wdXNoKG5ld0xpc3QpO1xuICAgIH1cbiAgICBzZXRUaXRsZUxpc3QobmV3TGlzdCl7XG4gICAgICAgIHRoaXMubGlzdDIucHVzaChuZXdMaXN0KTtcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuICAgIHNldER1ZURhdGUoKXtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gdGhpcy5kdWVEYXRlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBzZWxlY3RvcnMgfSBmcm9tIFwiLi9ET01cIjtcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCBUYXNrTGlzdCBmcm9tIFwiLi90YXNrbGlzdFwiO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuXG5cblxuXG5cblxuY29uc3QgcHJvamVjdEJ1dHRvbiA9IHNlbGVjdG9ycygpLmFkZFByb2plY3RCdXR0b247XG5jb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IHNlbGVjdG9ycygpLnByb2plY3RGb3JtQ29udGFpbmVyO1xuY29uc3QgYWRkVGFza0J1dHRvbiA9IHNlbGVjdG9ycygpLmFkZFRhc2tCdXR0b247XG5jb25zdCB0b2RvRm9ybUNvbnRhaW5lciA9IHNlbGVjdG9ycygpLnRvZG9Gb3JtQ29udGFpbmVyO1xuY29uc3QgdG9kb0Zvcm0gPSBzZWxlY3RvcnMoKS50b2RvRm9ybTtcbmNvbnN0IHByb2plY3RGb3JtID0gc2VsZWN0b3JzKCkucHJvamVjdEZvcm07XG5jb25zdCBwcm9qZWN0TGlzdCA9IHNlbGVjdG9ycygpLnByb2plY3RMaXN0O1xuY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IHNlbGVjdG9ycygpLnByb2plY3ROYW1lSW5wdXQ7XG5jb25zdCB0b2RvVGFza0lucHV0ID0gc2VsZWN0b3JzKCkudG9kb1Rhc2tJbnB1dDtcbmNvbnN0IHRhc2tMaXN0ID0gc2VsZWN0b3JzKCkudGFza0xpc3Q7XG5jb25zdCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IHNlbGVjdG9ycygpLnByb2plY3ROYW1lQ29udGFpbmVyO1xuY29uc3QgbWFpblRpdGxlID0gc2VsZWN0b3JzKCkubWFpblRpdGxlO1xuIFxuY29uc3QgYWxsVGFza0xpc3RzID0gc2VsZWN0b3JzKCkuYWxsVGFza0xpc3RzO1xubGV0IGNvdW50ID0gMDtcbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0QnV0dG9uRXZlbnQgPSAoKCkgPT57XG5cbiAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgdG9kb0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHByb2plY3RGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0pOyAgIFxufSkoKTtcblxuZXhwb3J0IGNvbnN0IGFkZFRhc2tCdXR0b25FdmVudCA9ICgoKSA9PntcblxuICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdG9kb0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSk7XG59KSgpO1xuXG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCgpO1xuICBjb25zdCBzdG9yYWdlID0gW107XG5cbmV4cG9ydCBjb25zdCBwcm9qZWN0Rm9ybUV2ZW50ID0gKCgpID0+IHsgXG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKCk7XG4gICAgcHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHsgXG4gICAgICAgXG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWVDb250YWluZXInKVxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICBjb25zdCB0aXRsZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIFxuICAgICAgICB0YXNrLnNldFRpdGxlKHByb2plY3ROYW1lSW5wdXQudmFsdWUpO1xuICAgICAgICB0aXRsZU5hbWUuaW5uZXJUZXh0ID0gdGFzay5nZXRUaXRsZSgpOyBcbiAgICAgICAgdGFzay5zZXROYW1lTGlzdCh7dGl0ZTogdGFzay5nZXRUaXRsZSgpfSk7XG4gICAgICBcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQodGl0bGVOYW1lKTtcbiAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoYnV0dG9uKTsgXG4gICAgICAgIHN0b3JhZ2UucHVzaCh7dGl0bGU6IHRhc2suZ2V0VGl0bGUoKX0pO1xuICAgICAgICAgY29uc29sZS5sb2coc3RvcmFnZSk7XG4gICAgICAgICBcbiAgICAgICAgcHJvamVjdEZvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgaWYoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdE5hbWVDb250YWluZXInKSl7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRhc2tMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpc3QucmVtb3ZlQ2hpbGQodGFza0xpc3QuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRUaXRsZSA9IGUudGFyZ2V0LmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pbm5lclRleHQpO1xuICAgICAgICAgICAgICAgIG1haW5UaXRsZS5pbm5lclRleHQgPSBjbGlja2VkVGl0bGU7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHN0b3JhZ2VbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmKCBlbGVtZW50LnRpdGxlID09PSBtYWluVGl0bGUuaW5uZXJUZXh0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqZWN0S2V5cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvYmplY3RLZXlzLmxlbmd0aDsgaisrKSB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnRbYHRhc2ske2p9YF0hPXVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9UaXRsZScpOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IGVsZW1lbnRbYHRhc2ske2p9YF07IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZChidXR0b24pOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgdGFza0Zvcm1FdmVudCgpO1xuICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAgXG5cblxufSkoKTtcbmNvbnN0IGNyZWF0ZVRhc2sgPSAoKSA9PntcbiAgICAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzaygpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzdG9yYWdlW2ldO1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb1RpdGxlJyk7IFxuICAgICAgICAgICAgdGFzay5zZXROYW1lKHRvZG9UYXNrSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgaWYoIGVsZW1lbnQudGl0bGUgPT09IG1haW5UaXRsZS5pbm5lclRleHQpe1xuICAgICAgICAgICAgICAgIGVsZW1lbnRbYHRhc2ske2NvdW50fWBdID0gdGFzay5nZXROYW1lKCk7IFxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lclRleHQgPSAgZWxlbWVudFtgdGFzayR7Y291bnR9YF07IFxuICAgICAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKGJ1dHRvbik7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdG9kb0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHRvZG9UYXNrSW5wdXQudmFsdWUgPSAnJzsgXG4gICAgICAgICAgXG59O1xuZXhwb3J0IGNvbnN0IHRhc2tGb3JtRXZlbnQgPSAoKSA9PiB7IFxuICAgIHRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNyZWF0ZVRhc2spO1xuICAgIFxufTtcbnRhc2tGb3JtRXZlbnQoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlOyBcbiAgICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgICAgXG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuICAgIHNldFRpdGxlKG5ld1RpdGxlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlOyBcbiAgICB9XG4gICAgc2V0TGlzdChuZXdMaXN0KXtcbiAgICAgICAgdGhpcy5saXN0LnB1c2gobmV3TGlzdCk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJzZWxlY3RvcnMiLCJhZGRCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjYW5jZWxCdXR0b24iLCJhZGRQcm9qZWN0QnV0dG9uIiwiYWRkVGFza0J1dHRvbiIsInByb2plY3RGb3JtQ29udGFpbmVyIiwidG9kb0Zvcm1Db250YWluZXIiLCJwcm9qZWN0TGlzdCIsInByb2plY3RGb3JtIiwidG9kb0Zvcm0iLCJwcm9qZWN0TmFtZUlucHV0IiwidG9kb1Rhc2tJbnB1dCIsInRhc2tMaXN0IiwiYWxsVGFza0xpc3RzIiwicHJvamVjdE5hbWVDb250YWluZXIiLCJtYWluVGl0bGUiLCJUYXNrIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsIm5hbWUiLCJ0aGlzIiwibGlzdCIsImxpc3QyIiwiZ2V0VGl0bGUiLCJzZXRUaXRsZSIsIm5ld1RpdGxlIiwiZ2V0TmFtZSIsInNldE5hbWUiLCJuZXdOYW1lIiwic2V0TmFtZUxpc3QiLCJuZXdMaXN0IiwicHVzaCIsInNldFRpdGxlTGlzdCIsImdldER1ZURhdGUiLCJkdWVEYXRlIiwic2V0RHVlRGF0ZSIsInByb2plY3RCdXR0b24iLCJjb3VudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzZXRMaXN0Iiwic3RvcmFnZSIsImNyZWF0ZVRhc2siLCJ0YXNrIiwiZSIsImJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJpY29uIiwidGl0bGVOYW1lIiwidmFsdWUiLCJpbm5lclRleHQiLCJ0aXRlIiwiYXBwZW5kQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbnMiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJjbGlja2VkVGl0bGUiLCJ0YXJnZXQiLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsIm9iamVjdEtleXMiLCJPYmplY3QiLCJrZXlzIiwiaiIsInVuZGVmaW5lZCIsInRhc2tGb3JtRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9