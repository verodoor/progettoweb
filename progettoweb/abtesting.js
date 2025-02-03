function getVariant() {
    return Math.random() < 0.5 ? 'A' : 'B'; // 50% A e 50% B
}

document.addEventListener('DOMContentLoaded', () => {
    const variant = getVariant();
    const titleElement = document.getElementById('test-title');

    if (variant === 'A') {
        titleElement.textContent = 'Juvenila Maradonne'; // Titolo originale
    } else {
        titleElement.textContent = 'Associazione Sportiva Maradonne'; // Titolo variante
    }

    console.log(`Utente ha visto la variante: ${variant}`);
});
