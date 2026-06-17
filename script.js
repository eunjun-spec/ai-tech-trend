fetch("techcrunch_ai.csv")

.then(
response =>
response.text()
)

.then(data=>{

let rows =
data.split("\n")

let html=""

for(
let i=1;
i<rows.length;
i++
){

let col=
rows[i].split(",")

if(
col.length>=2
){

html+=`

<div class="card">

<h2>
${col[0]}
</h2>

<a
href="${col[1]}"
target="_blank"
>

기사 보기

</a>

</div>

`

}

}

document
.getElementById(
"news"
)
.innerHTML=
html

})s
