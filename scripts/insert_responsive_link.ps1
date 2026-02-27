$tag = '<link rel="stylesheet" href="css/responsive.css">'

Get-ChildItem -Path . -Include *.html -Recurse | ForEach-Object {
    $file = $_.FullName
    try {
        $content = Get-Content -Path $file -Raw -ErrorAction Stop
    } catch {
        Write-Host "Skipped $file (read error)"
        return
    }

    if ($content -match [regex]::Escape($tag)) {
        Write-Host "Already present: $file"
        return
    }

    if ($content -match '(?i)</head>') {
        $new = $content -replace '(?i)</head>', "$tag`n</head>"
        Set-Content -Path $file -Value $new -Encoding UTF8
        Write-Host "Updated: $file"
    } else {
        Write-Host "No </head> found in: $file"
    }
}
