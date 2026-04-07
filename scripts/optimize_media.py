from pathlib import Path
import sys


def main() -> int:
    try:
        from PIL import Image
    except Exception as exc:
        print(f"PIL_IMPORT_FAILED: {exc}")
        return 1

    root = Path(__file__).resolve().parents[1]
    assets = root / "src" / "assets"

    image_targets = [
        assets / "1.jpeg",
        assets / "2.jpeg",
        assets / "3.jpeg",
        assets / "4.jpeg",
        assets / "6.jpeg",
        assets / "7.jpeg",
        assets / "8.jpeg",
        assets / "9.jpeg",
        assets / "logo.jpeg",
        assets / "logos.jpeg",
    ]

    max_widths = {
        "1.jpeg": 1600,
        "2.jpeg": 1200,
        "3.jpeg": 1200,
        "4.jpeg": 1600,
        "6.jpeg": 1000,
        "7.jpeg": 1000,
        "8.jpeg": 1400,
        "9.jpeg": 1600,
        "logo.jpeg": 400,
        "logos.jpeg": 1200,
    }

    quality = {
        "1.jpeg": 72,
        "2.jpeg": 70,
        "3.jpeg": 70,
        "4.jpeg": 72,
        "6.jpeg": 72,
        "7.jpeg": 72,
        "8.jpeg": 72,
        "9.jpeg": 72,
        "logo.jpeg": 78,
        "logos.jpeg": 72,
    }

    for image_path in image_targets:
        if not image_path.exists():
            print(f"SKIP_MISSING: {image_path.name}")
            continue

        before = image_path.stat().st_size
        with Image.open(image_path) as img:
            img = img.convert("RGB")
            max_width = max_widths[image_path.name]
            if img.width > max_width:
                new_height = int(img.height * (max_width / img.width))
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

            img.save(
                image_path,
                format="JPEG",
                quality=quality[image_path.name],
                optimize=True,
                progressive=True,
            )
        after = image_path.stat().st_size
        print(f"{image_path.name}: {before} -> {after}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
