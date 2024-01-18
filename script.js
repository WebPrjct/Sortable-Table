const buttons=document.querySelectorAll(".btn");
// console.log(buttons);
buttons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        const table=document.getElementById("sortable-table");
        const col=button.dataset.col;
        const rows = table.querySelectorAll("tbody tr");
        const order=button.dataset.order;
        const sortedRows=Array.from(rows).sort((a,b)=>{
            const aValue = a.querySelector(`td[data-col="${col}"]`).textContent;
            const bValue = b.querySelector(`td[data-col="${col}"]`).textContent;
            if(order==="random"){
                return aValue.localeCompare(bValue);
            }
            if(order==="ascen"){
                return bValue.localeCompare(aValue);
            }
            if(order==="dec"){
                return aValue.localeCompare(bValue);
            }
        })
        const tbody=table.querySelector("tbody");
        tbody.innerHTML="";
        sortedRows.forEach((row)=>{
            tbody.appendChild(row);
        })

        const allBtns=table.querySelectorAll(".btn");
        
        allBtns.forEach((btn)=>{
            if(order==="random"){
                btn.dataset.order="ascen";
            }
            else if(order==="ascen"){
                btn.dataset.order="dec";
            }
            else if(order==="dec"){
                btn.dataset.order="ascen";
            }
        })
    })
})