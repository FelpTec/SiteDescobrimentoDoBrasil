document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("quiz-form");
    const resultado = document.getElementById("resultado-quiz");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const totalQuestoes = 6;
        let acertos = 0;

        for (let i = 1; i <= totalQuestoes; i++) {
            const resposta = form[`q${i}`]?.value;
            const feedback = document.getElementById(`feedback-q${i}`);

            if (resposta === "certo") {
                acertos++;
                feedback.textContent = "✅ Correto!";
                feedback.style.color = "green";
            } else if (resposta) {
                feedback.textContent = "❌ Incorreto.";
                feedback.style.color = "red";
            } else {
                feedback.textContent = "⚠️ Não respondida.";
                feedback.style.color = "orange";
            }
        }

        // Resultado geral
        if (acertos === totalQuestoes) {
            resultado.textContent = `🎉 Excelente! Você acertou todas as ${totalQuestoes} perguntas!`;
            resultado.style.color = "green";
        } else if (acertos >= totalQuestoes / 2) {
            resultado.textContent = `👍 Você acertou ${acertos} de ${totalQuestoes} perguntas. Bom trabalho!`;
            resultado.style.color = "orange";
        } else {
            resultado.textContent = `❌ Você acertou apenas ${acertos} de ${totalQuestoes}. Tente novamente!`;
            resultado.style.color = "red";
        }
    });
});
