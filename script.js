// Palīgmateriāls MDN Web Docs
function addComment() {
    // Teksta ievades lauks nolasa to ko lietotājs ir ievadījis, nepieņem tekstu ,ja tur ir tikai atstarpes
    const name = document.getElementById('nameInput').value.trim(); 

    // Teksta ievades lauks nolasa to ko lietotājs ir ievadījis, nepieņem tekstu ,ja tur ir tikai atstarpes
    const comment = document.getElementById('commentInput').value.trim();

    // Iegūstam pašreizējo datumu un laiku toLocalString nosaka ,lai datums un laiks izskatītos šādi 12.05.2025 12:30:07
    const now = new Date().toLocaleString();

    // Pārbaudām, vai abi lauki ir aizpildīti
    if (name && comment) {

        // Izveidojam objektu ar vārdu, komentāru un laiku, kas izpildīsies tikai tad, ja visi lauki būs aizpildīti
        const entry = {
            name: name,
            comment: comment,
            time: now
        };

        // Nolasām iepriekš saglabātās atsauksmes no localStorage, JSON.parse pārvērš par lielu teksta rindu
        let comments = JSON.parse(localStorage.getItem('atsauksmes')) || [];

        // Pievienojam jauno atsauksmi saraksta sākumā
        comments.unshift(entry);

        // Saglabājam atjaunināto atsauksmju sarakstu atpakaļ localStorage
        localStorage.setItem('atsauksmes', JSON.stringify(comments));

        // Parādam paziņojumu lietotājam, ka atsauksme saglabāta
        alert("Atsauksme saglabāta!");

        // Notīram ievades laukus, lai lietotājs var ierakstīt nākamo atsauksmi
        document.getElementById('nameInput').value = "";
        document.getElementById('commentInput').value = "";

    } else {
        // Ja kāds lauks nav aizpildīts, brīdinām lietotāju
        alert("Lūdzu, aizpildi abus laukus!");
    }
}
