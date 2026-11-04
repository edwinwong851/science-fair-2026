document.addEventListener('DOMContentLoaded', () => {
    const numberForgeBtn = document.getElementById('select-number-forge');
    const marketTycoonBtn = document.getElementById('select-market-tycoon');
    const lavaBalanceBtn = document.getElementById('select-lava-balance');
    const cipherHeistBtn = document.getElementById('select-cipher-heist');
    const mathDashBtn = document.getElementById('select-mathdash');

    numberForgeBtn.addEventListener('click', () => {
        window.location.href = 'number-forge.html';
    });

    marketTycoonBtn.addEventListener('click', () => {
        window.location.href = 'market-tycoon.html';
    });

    lavaBalanceBtn.addEventListener('click', () => {
        window.location.href = 'lava-balance.html';
    });

    cipherHeistBtn.addEventListener('click', () => {
        window.location.href = 'cipher-heist.html';
    });

    mathDashBtn.addEventListener('click', () => {
        window.location.href = 'mathdash.html';
    });
});
