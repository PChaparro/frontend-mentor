const quoteNumber = document.getElementById('quote-number');
const quoteText = document.getElementById('quote-text');

/**
 * @param {Number} it Iteration counter to try again no more than 3 times
 * @returns Random quote
 */
const getRandomQuote = async (it) => {
  if (it > 3) return {};

  try {
    const reply = await fetch('https://api.adviceslip.com/advice');
    const data = await reply.json();

    if (!data.slip) {
      console.error('Unable to get a new quote');
      return { success: false, quote: {} };
    }

    return { success: true, quote: data.slip };
  } catch {
    getRandomQuote(it++);
  }
};

/**
 * Get a random quote and update the interface
 */
const updateQuoteUI = async () => {
  const { quote, success } = await getRandomQuote(1);

  if (success) {
    quoteNumber.textContent = `ADVICE #${quote.id}`;
    quoteText.textContent = `"${quote.advice}"`;
  }
};

updateQuoteUI();
