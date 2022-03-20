import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignants-ajouter',
  templateUrl: './enseignants-ajouter.component.html',
  styleUrls: ['./enseignants-ajouter.component.scss']
})
export class EnseignantsAjouterComponent implements OnInit {

  ChooseCriteria = [
    { category: "Fruits", id: 1, isSelected: false },
    { category: "Animals", id: 2, isSelected: false }
  ];
  isChecked;
  isCheckedName;
  constructor() { }

  ngOnInit(): void {
    
  }
  onChange(e){       
    this.ChooseCriteria.forEach(val => {
      if (val.id == e.id) val.isSelected = !val.isSelected;
      else {
        val.isSelected = false;
      }
    });
  }
  
}
