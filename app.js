// Material Class: represents a Material
class Material {
    constructor(position, material, date) {
        this.position = position;
        this.material = material;
        this.date = date;
    }
}
// UI class: HAndle UI TAsks
class UI {
    static displayMaterial() {
        const StoredMaterials = [{
                position: "A01-01-17",
                material: "01011241035",
                date: "21.10.2019"
            },
            {
                position: "A01-02-27",
                material: "01011151140",
                date: "20.10.2019"
            }
        ];

        const mat = StoredMaterials;

        mat.forEach((material) => UI.addMaterialToList(material))
    }
    static addMaterialToList(mat) {
        const list = document.querySelector('#material-list');

        const row = document.createElement('tr');
        row.innerHTML = `
           <td> ${mat.position}</td> 
           <td> ${mat.material}</td>
           <td> ${mat.date}</td>
           <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
           `;

        list.appendChild(row);
    }
}
// Store Class: Handles Storage

//Events: Display Material
document.addEventListener('DOMContentLoaded', UI.displayMaterial);
//Events:  Add Material
document.querySelector('#material-form').addEventListener('submit', (e) => {
    // Get from values
    e.preventDefault();

    const position = document.querySelector('#position').value;
    const material = document.querySelector('#material').value;
    const date = document.querySelector('#date').value;

    // Instatiate material
    const material = new Material(position, material, date);

    console.log(material)
});
//Events:  Remove a Material