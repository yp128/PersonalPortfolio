import {Component, OnInit} from '@angular/core';
import abilities from '../../assets/JSON/skiils_above_50.json';

@Component({
  selector: 'app-abilities-page',
  templateUrl: './abilities-page.component.html',
  styleUrls: ['./abilities-page.component.css']
})
export class AbilitiesPageComponent implements OnInit {


  sortedSkillsArray = abilities.skills.sort((a, b) => {
    return b.level - a.level;
  });


  skillSetOne = this.sortedSkillsArray.slice(0, this.sortedSkillsArray.length / 2 + 1);
  skillSetTwo = this.sortedSkillsArray.slice(this.sortedSkillsArray.length / 2 + 1, this.sortedSkillsArray.length + 1);

  sortedLanguageArray = abilities.language.sort((a, b) => {
    return b.level - a.level;
  });

  languageSetOne = this.sortedLanguageArray.slice(0, this.sortedLanguageArray.length / 2 + 1);
  languageSetTwo = this.sortedLanguageArray.slice(this.sortedLanguageArray.length / 2 + 1, this.sortedLanguageArray.length + 1);

  sortedToolsArray = abilities.tools.sort((a, b) => {
    return b.level - a.level;
  });

  toolsSetOne = this.sortedToolsArray.slice(0, this.sortedToolsArray.length / 2 );
  toolsSetTwo = this.sortedToolsArray.slice(this.sortedToolsArray.length / 2 , this.sortedToolsArray.length);


  constructor() {
    console.log(this.sortedToolsArray.length);
  }

  ngOnInit(): void {

  }

}
