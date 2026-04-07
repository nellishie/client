from pathlib import Path
import subprocess
import sys

import imageio_ffmpeg


def main() -> int:
    root = Path(__file__).resolve().parents[1]
    source = root / "src" / "assets" / "5.mp4"
    temp = root / "src" / "assets" / "5.optimized.mp4"

    if not source.exists():
        print("SOURCE_MISSING")
        return 1

    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    before = source.stat().st_size

    cmd = [
        ffmpeg,
        "-y",
        "-i",
        str(source),
        "-vf",
        "scale='min(960,iw)':-2",
        "-an",
        "-c:v",
        "libx264",
        "-preset",
        "slow",
        "-crf",
        "30",
        "-movflags",
        "+faststart",
        str(temp),
    ]

    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(result.stderr)
        return result.returncode

    if not temp.exists():
        print("OUTPUT_MISSING")
        return 1

    after = temp.stat().st_size
    if after >= before:
        temp.unlink(missing_ok=True)
        print(f"NO_IMPROVEMENT: {before} -> {after}")
        return 0

    temp.replace(source)
    print(f"5.mp4: {before} -> {after}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
