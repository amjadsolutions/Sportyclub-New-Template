<?php

$apiKey = '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'; // Replace with your actual API key
$textToRephrase = 'Maulana Tariq Jamil PP, is a Pakistani Islamic television preacher, religious writer, scholar, and a member of the Tablighi Jamaat. ';

// Make a POST request to the GPT-3 API
$ch = curl_init('https://api.openai.com/v1/engines/davinci/completions');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'prompt' => "Rephrase the following text: \"$textToRephrase\"",
    'max_tokens' => 100, // Adjust as needed
]));

$headers = [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json',
];

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
curl_close($ch);

if ($response) {
    $data = json_decode($response, true);
    $rephrasedText = $data['choices'][0]['text'];
    // echo "Original text: $textToRephrase\n";
    echo "Rephrased text: $rephrasedText\n";
} else {
    echo "Failed to rephrase the text.";
}
