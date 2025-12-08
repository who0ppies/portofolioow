document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://formspree.io/f/xpwekbny", {
                method: "POST",
                body: new FormData(form),
                headers: { "Accept": "application/json" }
            });

            const data = await res.json();
          if  {
                form.reset();
            } else {
                alert("Error: " + JSON.stringify(data));
            }
        } catch (err) {
            alert("Gagal mengirim.");
        }
    });
});