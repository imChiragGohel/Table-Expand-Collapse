import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lst_data: any = [
    {
      "surveyName": "Chirag",
      "headerColor": "blue",
      "footerUrl": "footer1.test.com",
      "footerColor": "red",
      "sections": [
        {
          "sectionTitle": "Section1",
          "sectionDescription": "Section Description 1",
          "questions": [
            {
              "que": "Que 1 Section1",
              "ans": "ANS 1 Section1"
            },
            {
              "que": "Que 2 Section1",
              "ans": "ANS 2 Section1"
            },
            {
              "que": "Que 3 Section1",
              "ans": "ANS 3 Section1"
            }
          ]
        },
        {
          "sectionTitle": "Section2",
          "sectionDescription": "Section Description 2",
          "questions": [
            {
              "que": "Que 1 Section2",
              "ans": "ANS 1 Section2"
            },
            {
              "que": "Que 2 Section2",
              "ans": "ANS 2 Section2"
            },
            {
              "que": "Que 3 Section2",
              "ans": "ANS 3 Section2"
            }
          ]
        },
        {
          "sectionTitle": "Section3",
          "sectionDescription": "Section Description 3",
          "questions": [
            {
              "que": "Que 1 Section3",
              "ans": "ANS 1 Section3"
            },
            {
              "que": "Que 2 Section3",
              "ans": "ANS 2 Section3"
            },
            {
              "que": "Que 3 Section3",
              "ans": "ANS 3 Section3"
            }
          ]
        }
      ]
    },
    {
      "surveyName": "Rahul",
      "headerColor": "blue",
      "footerUrl": "footer1.test.com",
      "footerColor": "red",
      "sections": [
        {
          "sectionTitle": "Section1",
          "sectionDescription": "Section Description 1",
          "questions": [
            {
              "que": "Que 1 Section1",
              "ans": "ANS 1 Section1"
            },
            {
              "que": "Que 2 Section1",
              "ans": "ANS 2 Section1"
            },
            {
              "que": "Que 3 Section1",
              "ans": "ANS 3 Section1"
            }
          ]
        },
        {
          "sectionTitle": "Section2",
          "sectionDescription": "Section Description 2",
          "questions": [
            {
              "que": "Que 1 Section2",
              "ans": "ANS 1 Section2"
            },
            {
              "que": "Que 2 Section2",
              "ans": "ANS 2 Section2"
            },
            {
              "que": "Que 3 Section2",
              "ans": "ANS 3 Section2"
            }
          ]
        },
        {
          "sectionTitle": "Section3",
          "sectionDescription": "Section Description 3",
          "questions": [
            {
              "que": "Que 1 Section3",
              "ans": "ANS 1 Section3"
            },
            {
              "que": "Que 2 Section3",
              "ans": "ANS 2 Section3"
            },
            {
              "que": "Que 3 Section3",
              "ans": "ANS 3 Section3"
            }
          ]
        }
      ]
    }
  ];

  onLastClick(item, index) {
    if (item.isOpen) {
      item.isOpen = false;
    } else {
      item.isOpen = true;
    }
  };

  ngOnInit() {
    if (this.lst_data.length > 0) {
      this.lst_data.map(x => {
        x.isOpen = false;
        if (x.sections.length > 0) {
          x.sections.map(s => {
            s.isOpen = false;
            if (s.questions.length > 0) {
              s.questions.map(q => {
                q.isOpen = false;
              });
            }
          });
        }
      });
    }
    console.log('this.lst_data:', this.lst_data)
  }
}
