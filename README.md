<h1>Wordle Clone</h1>
<h3>Hello, This is a clone of the popular game from New York times called Wordle</h3>
<p>To Use the Code, Follow these steps</p>
<ol>
  <li>Clone the repository in your local system</li><br>
  <li>Open a terminal in the root folder of the repository and type <br><br><pre>npm install .</pre>(This will install all the required packages)</li><br>
  <li>In the terminal type <br><br><pre>npm run start</pre></li><br>
  <li>In another teminal type <br><br><pre>json-server ./data/data.json --port 8000</pre>  (you can other ports but you will have to change them in ur code and you cant use port 3000 since your code is running on that port)</li><br>
  <li>In Case the previous step throws an error you can try the following steps<br><br>
    <ul>
      <li>Open powershell in admin mode</li>
      <li>Type the following command in the powershell terminal <br><br><pre>Set-ExecutionPolicy Remotesigned</pre></li>
      <li>Now it should work, once you are done playing the game you can return to your previous setting using the command <br><pre>Set-ExecutionPolicy Restricted</pre></li>
    </ul>
  </li>
</ol>
