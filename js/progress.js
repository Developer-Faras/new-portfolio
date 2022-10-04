// Get All Elements
const circles = document.querySelectorAll('#circle');

for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    
    const parsent = parseInt(circle.getAttribute('progress'));
    
    const html = `
        <svg class="circle" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle class="circle_background" cx="20" cy="20" r="16" />
            <circle class="circle_line animate" stroke-dasharray="${parsent} ,100" cx="20" cy="20" r="16" />
            <g class="">
                <text x="28%" y="60%" class="parcent" class="" >${parsent}%</text>
            </g>
        </svg>
        
        `;
    circle.innerHTML = html;
}
