<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advogado Nômade</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Arial, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            background: linear-gradient(45deg, #fff, #e0f7fa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .tagline {
            font-size: 1.2rem;
            opacity: 0.9;
            margin-bottom: 15px;
        }
        
        .status {
            background: rgba(255, 255, 255, 0.2);
            padding: 10px 20px;
            border-radius: 50px;
            display: inline-block;
            font-size: 0.9rem;
            margin: 10px 0;
        }
        
        .whatsapp-btn {
            display: block;
            width: 100%;
            background: #25D366;
            color: white;
            text-align: center;
            padding: 15px;
            border-radius: 10px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1rem;
            margin: 20px 0;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }
        
        .whatsapp-btn:hover {
            background: #20bd5a;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }
        
        .calculators {
            margin-top: 30px;
        }
        
        h2 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            text-align: center;
        }
        
        .disclaimer {
            font-size: 0.9rem;
            opacity: 0.8;
            text-align: center;
            margin-top: 10px;
            font-style: italic;
        }
        
        .feature-list {
            list-style: none;
            margin: 20px 0;
        }
        
        .feature-list li {
            padding: 8px 0;
            padding-left: 25px;
            position: relative;
        }
        
        .feature-list li:before {
            content: "•";
            position: absolute;
            left: 10px;
            color: #4fc3f7;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Advogado Nômade</h1>
            <p class="tagline">Direito de qualquer lugar, para qualquer pessoa, a qualquer hora.</p>
            
            <div class="status">
                ✅ Hoje atendendo de Salvador/BA → resposta em 5 min
            </div>
            
            <a href="https://wa.me/5571999999999?text=Olá! Gostaria de falar com um advogado" class="whatsapp-btn">
                💬 Falar com advogado no WhatsApp
            </a>
        </header>
        
        <section class="calculators">
            <h2>Calculadoras Jurídicas Grátis</h2>
            <p style="text-align: center; margin-bottom: 15px;">Estime valores em segundos. Resultados são referências – confirme com nosso advogado.</p>
            
            <ul class="feature-list">
                <li>Calculadora de Danos Morais</li>
                <li>Calculadora de Pensão Alimentícia</li>
                <li>Calculadora de Rescisão Trabalhista</li>
                <li>Calculadora de Herança</li>
                <li>Calculadora de Aposentadoria</li>
            </ul>
            
            <p class="disclaimer">* Resultados estimativos. Consulte nosso advogado para análise precisa.</p>
        </section>
    </div>
</body>
</html>
