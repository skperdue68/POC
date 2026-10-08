"""Compile/test real hotkey sources with a minimal App harness, without building an installer."""
import os
import shutil
import subprocess
import tempfile
from pathlib import Path

root=Path(__file__).resolve().parents[1]
source=root/'GO/GuildSync-Frontend-Client'
with tempfile.TemporaryDirectory(prefix='guildsync-voice-test-') as temporary:
    target=Path(temporary)
    for file in list(source.glob('voice_hotkey*.go'))+[source/'go.mod',source/'go.sum']:
        shutil.copyfile(file,target/file.name)
    (target/'app_harness_test.go').write_text('package main\nimport("context";"sync")\ntype App struct { mu sync.Mutex; ctx context.Context; voice *voiceRuntime }\n')
    subprocess.run(['go','test','-tags','voicehotkeytest','-race','-count=1','.'],cwd=target,check=True,env=os.environ.copy())
