# Hero — imagen principal

| Archivo | Uso |
|---------|-----|
| `home1.png` | Fuente original (Home1.png, 1536×1024) |

Copia servida en producción:

- `frontend/public/images/hero/home1.png`
- `frontend/public/images/hero/hero-wellbeing.png` (alias, misma imagen)

Tras sustituir el asset, sincroniza ambas rutas en `public/`:

```bash
cp frontend/assets/images/hero/home1.png frontend/public/images/hero/home1.png
cp frontend/assets/images/hero/home1.png frontend/public/images/hero/hero-wellbeing.png
```
