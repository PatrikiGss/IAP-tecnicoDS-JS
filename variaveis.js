// primeiro codigo do tecnico:

// como declarar variais em JS:
<html>
   <head>
      <title>Exemplo - Idade Canina</title>
   </head>
   <body>
   </body>
   <script type='text/javascript'>
      //Leitura do valor de entrada
      var idade = window.prompt("Informe a idade do cão:");
      //Conversão do valor de entrada para numérico
      var idade = Number(idade);
      //Cálculo da idade em anos humanos
      var idade = idade * 7;
      //Exibição do resultado
      window.confirm('Idade do cão em anos humanos: ' + idade);
   </script>
</html>
