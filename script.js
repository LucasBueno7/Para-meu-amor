function goToNextPage() {
    window.location.href = "contagem.html";
}


function updateCounter() {
    const startDate = new Date("2022-08-07T00:00:00"); 
    const currentDate = new Date(); 

    const timeDiff = currentDate - startDate;

    const years = currentDate.getFullYear() - startDate.getFullYear();
    const months = currentDate.getMonth() - startDate.getMonth();
    const days = currentDate.getDate() - startDate.getDate();

    let correctedYears = years;
    let correctedMonths = months;
    let correctedDays = days;

    if (correctedMonths < 0) {
        correctedYears--;
        correctedMonths += 12;
    }

    if (correctedDays < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        correctedDays += lastMonth.getDate();
        correctedMonths--;
        if (correctedMonths < 0) {
            correctedMonths = 11;
            correctedYears--;
        }
    }

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    document.getElementById('years').textContent = correctedYears;
    document.getElementById('months').textContent = correctedMonths;
    document.getElementById('days').textContent = correctedDays;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCounter, 1000);

updateCounter();



