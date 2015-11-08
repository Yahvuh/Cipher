var Main = 
{
	Init: function()
	{
		console.log("Loaded");
	},

	Encrypt: function()
	{
		var input = document.getElementById("cipherInput");
		var output = document.getElementById("result");
		alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		key = "BCDEFGHIJKLMNOPQRSTUVWXYZA";
		cryptString = ""
		inputVal = input.value.toUpperCase();
		for(i=0;i<inputVal.length;i++)
		{
			letter = inputVal.charAt(i);
			position = alphabet.indexOf(letter);
			if(position == -1)
			{
				cryptString = cryptString + letter;
			} else 
			{
				cryptString = cryptString + key.charAt(position);
			}			
		}
		output.innerHTML = cryptString;
	},

	Decrypt: function()
	{
		var input = document.getElementById("cipherInput");
		var output = document.getElementById("result");
		alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		key = "BCDEFGHIJKLMNOPQRSTUVWXYZA";
		cryptString = ""
		inputVal = input.value.toUpperCase();
		for(i=0;i<inputVal.length;i++)
		{
			letter = inputVal.charAt(i);
			position = key.indexOf(letter);
			if(position == -1)
			{
				cryptString = cryptString + letter;
			} else 
			{
				cryptString = cryptString + alphabet.charAt(position);
			}			
		}
		output.innerHTML = cryptString;
	}
};

window.onload = function()
{
	Main.Init();
}