let menu = Array.from(document.querySelectorAll('.item'));
let titleField = Array.from(document.querySelectorAll('.activity'));
let hoursField = Array.from(document.querySelectorAll('.hour'));
let lastWeekField = Array.from(document.querySelectorAll('.lastweek'));

function abrirDados(e) {
        let measure = e.classList.value;

        switch(measure) {
                case 'item daily active':
                        measure = 'daily';
                        break;
                case 'item weekly active':
                        measure = 'weekly';
                        break;
                case 'item monthly active':
                        measure = 'monthly';
                        break;
        }


        for (let i in titleField) {
                titleField[i].innerText = infos[i].title;
                hoursField[i].innerText = `${infos[i].timeframes[measure].current}hrs`;
                lastWeekField[i].innerText = `Last Week - ${infos[i].timeframes[measure].previous}hrs`
        }
}

abrirDados(menu[1]);


for (let i in menu) {
        menu[i].addEventListener('click', ()=>{
                /*removendo o active de todo mundo*/
                for (let x in menu) {
                        menu[x].classList.remove('active');
                }

                /*colocando o active no que foi clicado*/
                menu[i].classList.add('active');

                /*mandando o ativo pra função*/
                if (menu[i].classList.contains('active')) {
                        abrirDados(menu[i]);
                }
        })
}


