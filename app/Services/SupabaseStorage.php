<?php
declare(strict_types=1);

namespace App\Services;

class SupabaseStorage
{
    private string $url;
    private string $apiKey;
    private string $bucket;

    public function __construct(string $url, string $apiKey, string $bucket)
    {
        $this->url = rtrim($url, '/');
        $this->apiKey = $apiKey;
        $this->bucket = $bucket;
    }

    /**
     * Faz o upload do conteúdo do arquivo para o bucket Supabase.
     * Retorna array com 'success' e 'url' ou 'message' em caso de erro.
     */
    public function uploadFile(string $filename, string $fileContent, string $contentType): array
    {
        $endpoint = "{$this->url}/storage/v1/object/{$this->bucket}/{$filename}";

        $headers = [
            "Authorization: Bearer {$this->apiKey}",
            "apikey: {$this->apiKey}",
            "x-upsert: true",
            "Content-Type: {$contentType}",
        ];

        $ch = curl_init($endpoint);

        // ALTERAÇÃO: método PUT para upload
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'PUT');

        curl_setopt($ch, CURLOPT_POSTFIELDS, $fileContent);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlError = curl_errno($ch) ? curl_error($ch) : null;

        curl_close($ch);

        if (($httpCode === 200 || $httpCode === 201) && !$curlError) {
            return [
                'success' => true,
                'url' => "{$this->url}/storage/v1/object/public/{$this->bucket}/{$filename}"
            ];
        }

        return [
            'success' => false,
            'message' => "Erro ao enviar arquivo. HTTP: {$httpCode}" . ($curlError ? " - cURL: {$curlError}" : ''),
            'response' => $response,
        ];
    }
}
