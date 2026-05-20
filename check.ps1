$filePath = "C:\Users\know.yer\.openclaw\workspace\knowyer\app.js"
$content = Get-Content $filePath -Raw

# Check line endings
$hasCRLF = $content.Contains("`r`n")
Write-Host "Has CRLF: $hasCRLF"
Write-Host "Has LF only: $($content.Contains("`n") -and -not $hasCRLF)"

# Find the posts array start
$pattern = "posts: \["
$idx = $content.IndexOf($pattern)
if ($idx -ge 0) {
    Write-Host "Found 'posts: [' at index: $idx"
    $snippet = $content.Substring($idx, 150)
    Write-Host "Snippet: $([System.BitConverter]::ToString([System.Text.Encoding]::UTF8.GetBytes($snippet.Substring(0, [Math]::Min(50, $snippet.Length)))))"
}