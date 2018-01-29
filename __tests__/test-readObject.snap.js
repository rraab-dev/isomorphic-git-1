module.exports = {
  'readObject test missing 1': `"Failed to read git object with oid aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"`,
  'readObject test shallow 1': `"Failed to read git object with oid b8b1fcecbc6f5ea8bc915c3ac319e8c9eb204f95 because it is a shallow commit"`,
  'readObject parsed 1': `{ "format": "parsed", "object": { "author": { "email": "wmhilton@gmail.com", "name": "Will Hilton", "timestamp": 1502484200, "timezoneOffset": 240 }, "committer": { "email": "wmhilton@gmail.com", "name": "Will Hilton", "timestamp": 1502484200, "timezoneOffset": 240 }, "gpgsig": "-----BEGIN PGP SIGNATURE-----\\nVersion: GnuPG v1\\n\\niQIcBAABAgAGBQJZjhboAAoJEJYJuKWSi6a5V5UP/040SfemJ13PRBXst2eB59gs\\n3hPx29DRKBhFtvk+uS+8523/hUfry2oeWWd6YRkcnkxxAUtBnfzVkI9AgRIc1NTM\\nh5XtLMQubCAKw8JWvVvoXETzwVAODmdmvC4WSQCLu+opoe6/W7RvkrTD0pbkwH4E\\nMXoha59sIWZ/FacZX6ByYqhFykfJL8gCFvRSzjiqBIbsP7Xq2Mh4jkAKYl5zxV3u\\nqCk26hnhL++kwfXlu2YdGtB9+lj3pk1NeWqR379zRzh4P10FxXJ18qSxczbkAFOY\\n6o5h7a/Mql1KqWB9EFBupCpjydmpAtPo6l1Us4a3liB5LJvCh9xgR2HtShR4b97O\\nnIpXP4ngy4z9UyrXXxxpiQQn/kVn/uKgtvGp8nOFioo61PCi9js2QmQxcsuBOeO+\\nDdFq5k2PMNZLwizt4P8EGfVJoPbLhdYP4oWiMCuYV/2fNh0ozl/q176HGszlfrke\\n332Z0maJ3A5xIRj0b7vRNHV8AAl9Dheo3LspjeovP2iycCHFP03gSpCKdLRBRC4T\\nX10BBFD8noCMXJxb5qenrf+eKRd8d4g7JtcyzqVgkBQ68GIG844VWRBolOzx4By5\\ncAaw/SYIZG3RorAc11iZ7sva0jFISejmEzIebuChSzdWO2OOWRVvMdhyZwDLUgAb\\nQixh2bmPgr3h9nxq2Dmn\\n=4+DN\\n-----END PGP SIGNATURE-----", "message": "Improve resolveRef to handle more kinds of refs. Add tests\\n", "parent": [ "b4f8206d9e359416b0f34238cbeb400f7da889a8" ], "tree": "e0b8f3574060ee24e03e4af3896f65dd208a60cc" }, "source": "./objects/e1/0ebb90d03eaacca84de1af0a59b444232da99e", "type": "commit"}`,
  'readObject content 1': `{ "format": "content", "object": { "data": [ 116, 114, 101, 101, 32, 101, 48, 98, 56, 102, 51, 53, 55, 52, 48, 54, 48, 101, 101, 50, 52, 101, 48, 51, 101, 52, 97, 102, 51, 56, 57, 54, 102, 54, 53, 100, 100, 50, 48, 56, 97, 54, 48, 99, 99, 10, 112, 97, 114, 101, 110, 116, 32, 98, 52, 102, 56, 50, 48, 54, 100, 57, 101, 51, 53, 57, 52, 49, 54, 98, 48, 102, 51, 52, 50, 51, 56, 99, 98, 101, 98, 52, 48, 48, 102, 55, 100, 97, 56, 56, 57, 97, 56, 10, 97, 117, 116, 104, 111, 114, 32, 87, 105, 108, 108, 32, 72, 105, 108, 116, 111, 110, 32, 60, 119, 109, 104, 105, 108, 116, 111, 110, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109, 62, 32, 49, 53, 48, 50, 52, 56, 52, 50, 48, 48, 32, 45, 48, 52, 48, 48, 10, 99, 111, 109, 109, 105, 116, 116, 101, 114, 32, 87, 105, 108, 108, 32, 72, 105, 108, 116, 111, 110, 32, 60, 119, 109, 104, 105, 108, 116, 111, 110, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109, 62, 32, 49, 53, 48, 50, 52, 56, 52, 50, 48, 48, 32, 45, 48, 52, 48, 48, 10, 103, 112, 103, 115, 105, 103, 32, 45, 45, 45, 45, 45, 66, 69, 71, 73, 78, 32, 80, 71, 80, 32, 83, 73, 71, 78, 65, 84, 85, 82, 69, 45, 45, 45, 45, 45, 10, 32, 86, 101, 114, 115, 105, 111, 110, 58, 32, 71, 110, 117, 80, 71, 32, 118, 49, 10, 32, 10, 32, 105, 81, 73, 99, 66, 65, 65, 66, 65, 103, 65, 71, 66, 81, 74, 90, 106, 104, 98, 111, 65, 65, 111, 74, 69, 74, 89, 74, 117, 75, 87, 83, 105, 54, 97, 53, 86, 53, 85, 80, 47, 48, 52, 48, 83, 102, 101, 109, 74, 49, 51, 80, 82, 66, 88, 115, 116, 50, 101, 66, 53, 57, 103, 115, 10, 32, 51, 104, 80, 120, 50, 57, 68, 82, 75, 66, 104, 70, 116, 118, 107, 43, 117, 83, 43, 56, 53, 50, 51, 47, 104, 85, 102, 114, 121, 50, 111, 101, 87, 87, 100, 54, 89, 82, 107, 99, 110, 107, 120, 120, 65, 85, 116, 66, 110, 102, 122, 86, 107, 73, 57, 65, 103, 82, 73, 99, 49, 78, 84, 77, 10, 32, 104, 53, 88, 116, 76, 77, 81, 117, 98, 67, 65, 75, 119, 56, 74, 87, 118, 86, 118, 111, 88, 69, 84, 122, 119, 86, 65, 79, 68, 109, 100, 109, 118, 67, 52, 87, 83, 81, 67, 76, 117, 43, 111, 112, 111, 101, 54, 47, 87, 55, 82, 118, 107, 114, 84, 68, 48, 112, 98, 107, 119, 72, 52, 69, 10, 32, 77, 88, 111, 104, 97, 53, 57, 115, 73, 87, 90, 47, 70, 97, 99, 90, 88, 54, 66, 121, 89, 113, 104, 70, 121, 107, 102, 74, 76, 56, 103, 67, 70, 118, 82, 83, 122, 106, 105, 113, 66, 73, 98, 115, 80, 55, 88, 113, 50, 77, 104, 52, 106, 107, 65, 75, 89, 108, 53, 122, 120, 86, 51, 117, 10, 32, 113, 67, 107, 50, 54, 104, 110, 104, 76, 43, 43, 107, 119, 102, 88, 108, 117, 50, 89, 100, 71, 116, 66, 57, 43, 108, 106, 51, 112, 107, 49, 78, 101, 87, 113, 82, 51, 55, 57, 122, 82, 122, 104, 52, 80, 49, 48, 70, 120, 88, 74, 49, 56, 113, 83, 120, 99, 122, 98, 107, 65, 70, 79, 89, 10, 32, 54, 111, 53, 104, 55, 97, 47, 77, 113, 108, 49, 75, 113, 87, 66, 57, 69, 70, 66, 117, 112, 67, 112, 106, 121, 100, 109, 112, 65, 116, 80, 111, 54, 108, 49, 85, 115, 52, 97, 51, 108, 105, 66, 53, 76, 74, 118, 67, 104, 57, 120, 103, 82, 50, 72, 116, 83, 104, 82, 52, 98, 57, 55, 79, 10, 32, 110, 73, 112, 88, 80, 52, 110, 103, 121, 52, 122, 57, 85, 121, 114, 88, 88, 120, 120, 112, 105, 81, 81, 110, 47, 107, 86, 110, 47, 117, 75, 103, 116, 118, 71, 112, 56, 110, 79, 70, 105, 111, 111, 54, 49, 80, 67, 105, 57, 106, 115, 50, 81, 109, 81, 120, 99, 115, 117, 66, 79, 101, 79, 43, 10, 32, 68, 100, 70, 113, 53, 107, 50, 80, 77, 78, 90, 76, 119, 105, 122, 116, 52, 80, 56, 69, 71, 102, 86, 74, 111, 80, 98, 76, 104, 100, 89, 80, 52, 111, 87, 105, 77, 67, 117, 89, 86, 47, 50, 102, 78, 104, 48, 111, 122, 108, 47, 113, 49, 55, 54, 72, 71, 115, 122, 108, 102, 114, 107, 101, 10, 32, 51, 51, 50, 90, 48, 109, 97, 74, 51, 65, 53, 120, 73, 82, 106, 48, 98, 55, 118, 82, 78, 72, 86, 56, 65, 65, 108, 57, 68, 104, 101, 111, 51, 76, 115, 112, 106, 101, 111, 118, 80, 50, 105, 121, 99, 67, 72, 70, 80, 48, 51, 103, 83, 112, 67, 75, 100, 76, 82, 66, 82, 67, 52, 84, 10, 32, 88, 49, 48, 66, 66, 70, 68, 56, 110, 111, 67, 77, 88, 74, 120, 98, 53, 113, 101, 110, 114, 102, 43, 101, 75, 82, 100, 56, 100, 52, 103, 55, 74, 116, 99, 121, 122, 113, 86, 103, 107, 66, 81, 54, 56, 71, 73, 71, 56, 52, 52, 86, 87, 82, 66, 111, 108, 79, 122, 120, 52, 66, 121, 53, 10, 32, 99, 65, 97, 119, 47, 83, 89, 73, 90, 71, 51, 82, 111, 114, 65, 99, 49, 49, 105, 90, 55, 115, 118, 97, 48, 106, 70, 73, 83, 101, 106, 109, 69, 122, 73, 101, 98, 117, 67, 104, 83, 122, 100, 87, 79, 50, 79, 79, 87, 82, 86, 118, 77, 100, 104, 121, 90, 119, 68, 76, 85, 103, 65, 98, 10, 32, 81, 105, 120, 104, 50, 98, 109, 80, 103, 114, 51, 104, 57, 110, 120, 113, 50, 68, 109, 110, 10, 32, 61, 52, 43, 68, 78, 10, 32, 45, 45, 45, 45, 45, 69, 78, 68, 32, 80, 71, 80, 32, 83, 73, 71, 78, 65, 84, 85, 82, 69, 45, 45, 45, 45, 45, 10, 10, 73, 109, 112, 114, 111, 118, 101, 32, 114, 101, 115, 111, 108, 118, 101, 82, 101, 102, 32, 116, 111, 32, 104, 97, 110, 100, 108, 101, 32, 109, 111, 114, 101, 32, 107, 105, 110, 100, 115, 32, 111, 102, 32, 114, 101, 102, 115, 46, 32, 65, 100, 100, 32, 116, 101, 115, 116, 115, 10 ], "type": "Buffer" }, "source": "./objects/e1/0ebb90d03eaacca84de1af0a59b444232da99e", "type": "commit"}`,
  'readObject wrapped 1': `{ "format": "wrapped", "object": { "data": [ 99, 111, 109, 109, 105, 116, 32, 49, 49, 49, 51, 0, 116, 114, 101, 101, 32, 101, 48, 98, 56, 102, 51, 53, 55, 52, 48, 54, 48, 101, 101, 50, 52, 101, 48, 51, 101, 52, 97, 102, 51, 56, 57, 54, 102, 54, 53, 100, 100, 50, 48, 56, 97, 54, 48, 99, 99, 10, 112, 97, 114, 101, 110, 116, 32, 98, 52, 102, 56, 50, 48, 54, 100, 57, 101, 51, 53, 57, 52, 49, 54, 98, 48, 102, 51, 52, 50, 51, 56, 99, 98, 101, 98, 52, 48, 48, 102, 55, 100, 97, 56, 56, 57, 97, 56, 10, 97, 117, 116, 104, 111, 114, 32, 87, 105, 108, 108, 32, 72, 105, 108, 116, 111, 110, 32, 60, 119, 109, 104, 105, 108, 116, 111, 110, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109, 62, 32, 49, 53, 48, 50, 52, 56, 52, 50, 48, 48, 32, 45, 48, 52, 48, 48, 10, 99, 111, 109, 109, 105, 116, 116, 101, 114, 32, 87, 105, 108, 108, 32, 72, 105, 108, 116, 111, 110, 32, 60, 119, 109, 104, 105, 108, 116, 111, 110, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109, 62, 32, 49, 53, 48, 50, 52, 56, 52, 50, 48, 48, 32, 45, 48, 52, 48, 48, 10, 103, 112, 103, 115, 105, 103, 32, 45, 45, 45, 45, 45, 66, 69, 71, 73, 78, 32, 80, 71, 80, 32, 83, 73, 71, 78, 65, 84, 85, 82, 69, 45, 45, 45, 45, 45, 10, 32, 86, 101, 114, 115, 105, 111, 110, 58, 32, 71, 110, 117, 80, 71, 32, 118, 49, 10, 32, 10, 32, 105, 81, 73, 99, 66, 65, 65, 66, 65, 103, 65, 71, 66, 81, 74, 90, 106, 104, 98, 111, 65, 65, 111, 74, 69, 74, 89, 74, 117, 75, 87, 83, 105, 54, 97, 53, 86, 53, 85, 80, 47, 48, 52, 48, 83, 102, 101, 109, 74, 49, 51, 80, 82, 66, 88, 115, 116, 50, 101, 66, 53, 57, 103, 115, 10, 32, 51, 104, 80, 120, 50, 57, 68, 82, 75, 66, 104, 70, 116, 118, 107, 43, 117, 83, 43, 56, 53, 50, 51, 47, 104, 85, 102, 114, 121, 50, 111, 101, 87, 87, 100, 54, 89, 82, 107, 99, 110, 107, 120, 120, 65, 85, 116, 66, 110, 102, 122, 86, 107, 73, 57, 65, 103, 82, 73, 99, 49, 78, 84, 77, 10, 32, 104, 53, 88, 116, 76, 77, 81, 117, 98, 67, 65, 75, 119, 56, 74, 87, 118, 86, 118, 111, 88, 69, 84, 122, 119, 86, 65, 79, 68, 109, 100, 109, 118, 67, 52, 87, 83, 81, 67, 76, 117, 43, 111, 112, 111, 101, 54, 47, 87, 55, 82, 118, 107, 114, 84, 68, 48, 112, 98, 107, 119, 72, 52, 69, 10, 32, 77, 88, 111, 104, 97, 53, 57, 115, 73, 87, 90, 47, 70, 97, 99, 90, 88, 54, 66, 121, 89, 113, 104, 70, 121, 107, 102, 74, 76, 56, 103, 67, 70, 118, 82, 83, 122, 106, 105, 113, 66, 73, 98, 115, 80, 55, 88, 113, 50, 77, 104, 52, 106, 107, 65, 75, 89, 108, 53, 122, 120, 86, 51, 117, 10, 32, 113, 67, 107, 50, 54, 104, 110, 104, 76, 43, 43, 107, 119, 102, 88, 108, 117, 50, 89, 100, 71, 116, 66, 57, 43, 108, 106, 51, 112, 107, 49, 78, 101, 87, 113, 82, 51, 55, 57, 122, 82, 122, 104, 52, 80, 49, 48, 70, 120, 88, 74, 49, 56, 113, 83, 120, 99, 122, 98, 107, 65, 70, 79, 89, 10, 32, 54, 111, 53, 104, 55, 97, 47, 77, 113, 108, 49, 75, 113, 87, 66, 57, 69, 70, 66, 117, 112, 67, 112, 106, 121, 100, 109, 112, 65, 116, 80, 111, 54, 108, 49, 85, 115, 52, 97, 51, 108, 105, 66, 53, 76, 74, 118, 67, 104, 57, 120, 103, 82, 50, 72, 116, 83, 104, 82, 52, 98, 57, 55, 79, 10, 32, 110, 73, 112, 88, 80, 52, 110, 103, 121, 52, 122, 57, 85, 121, 114, 88, 88, 120, 120, 112, 105, 81, 81, 110, 47, 107, 86, 110, 47, 117, 75, 103, 116, 118, 71, 112, 56, 110, 79, 70, 105, 111, 111, 54, 49, 80, 67, 105, 57, 106, 115, 50, 81, 109, 81, 120, 99, 115, 117, 66, 79, 101, 79, 43, 10, 32, 68, 100, 70, 113, 53, 107, 50, 80, 77, 78, 90, 76, 119, 105, 122, 116, 52, 80, 56, 69, 71, 102, 86, 74, 111, 80, 98, 76, 104, 100, 89, 80, 52, 111, 87, 105, 77, 67, 117, 89, 86, 47, 50, 102, 78, 104, 48, 111, 122, 108, 47, 113, 49, 55, 54, 72, 71, 115, 122, 108, 102, 114, 107, 101, 10, 32, 51, 51, 50, 90, 48, 109, 97, 74, 51, 65, 53, 120, 73, 82, 106, 48, 98, 55, 118, 82, 78, 72, 86, 56, 65, 65, 108, 57, 68, 104, 101, 111, 51, 76, 115, 112, 106, 101, 111, 118, 80, 50, 105, 121, 99, 67, 72, 70, 80, 48, 51, 103, 83, 112, 67, 75, 100, 76, 82, 66, 82, 67, 52, 84, 10, 32, 88, 49, 48, 66, 66, 70, 68, 56, 110, 111, 67, 77, 88, 74, 120, 98, 53, 113, 101, 110, 114, 102, 43, 101, 75, 82, 100, 56, 100, 52, 103, 55, 74, 116, 99, 121, 122, 113, 86, 103, 107, 66, 81, 54, 56, 71, 73, 71, 56, 52, 52, 86, 87, 82, 66, 111, 108, 79, 122, 120, 52, 66, 121, 53, 10, 32, 99, 65, 97, 119, 47, 83, 89, 73, 90, 71, 51, 82, 111, 114, 65, 99, 49, 49, 105, 90, 55, 115, 118, 97, 48, 106, 70, 73, 83, 101, 106, 109, 69, 122, 73, 101, 98, 117, 67, 104, 83, 122, 100, 87, 79, 50, 79, 79, 87, 82, 86, 118, 77, 100, 104, 121, 90, 119, 68, 76, 85, 103, 65, 98, 10, 32, 81, 105, 120, 104, 50, 98, 109, 80, 103, 114, 51, 104, 57, 110, 120, 113, 50, 68, 109, 110, 10, 32, 61, 52, 43, 68, 78, 10, 32, 45, 45, 45, 45, 45, 69, 78, 68, 32, 80, 71, 80, 32, 83, 73, 71, 78, 65, 84, 85, 82, 69, 45, 45, 45, 45, 45, 10, 10, 73, 109, 112, 114, 111, 118, 101, 32, 114, 101, 115, 111, 108, 118, 101, 82, 101, 102, 32, 116, 111, 32, 104, 97, 110, 100, 108, 101, 32, 109, 111, 114, 101, 32, 107, 105, 110, 100, 115, 32, 111, 102, 32, 114, 101, 102, 115, 46, 32, 65, 100, 100, 32, 116, 101, 115, 116, 115, 10 ], "type": "Buffer" }, "source": "./objects/e1/0ebb90d03eaacca84de1af0a59b444232da99e"}`,
  'readObject deflated 1': `{ "format": "deflated", "object": { "data": [ 120, 1, 157, 147, 201, 206, 163, 72, 16, 132, 231, 204, 83, 212, 221, 234, 118, 1, 5, 134, 209, 204, 104, 0, 27, 12, 222, 48, 252, 6, 236, 27, 75, 65, 97, 150, 98, 55, 230, 233, 219, 211, 115, 237, 83, 231, 41, 21, 138, 72, 125, 82, 42, 98, 90, 85, 249, 0, 88, 150, 229, 255, 24, 58, 140, 1, 134, 145, 148, 242, 194, 6, 65, 17, 98, 204, 33, 12, 121, 140, 194, 148, 151, 100, 49, 21, 133, 36, 225, 160, 20, 138, 48, 142, 153, 38, 236, 112, 61, 128, 8, 165, 18, 7, 197, 68, 198, 188, 32, 35, 86, 140, 96, 202, 35, 142, 151, 226, 8, 71, 8, 194, 116, 147, 132, 146, 36, 135, 18, 19, 142, 3, 161, 29, 240, 243, 178, 4, 251, 188, 28, 104, 13, 254, 122, 85, 228, 231, 246, 111, 86, 133, 121, 249, 61, 166, 213, 63, 128, 21, 32, 135, 36, 196, 65, 8, 190, 193, 207, 5, 230, 163, 126, 16, 7, 252, 59, 217, 172, 201, 250, 60, 3, 223, 254, 27, 117, 103, 152, 103, 96, 27, 54, 112, 77, 227, 172, 124, 221, 156, 221, 79, 157, 1, 30, 238, 250, 156, 214, 127, 2, 163, 30, 109, 3, 76, 44, 3, 24, 144, 95, 205, 88, 85, 20, 85, 201, 20, 67, 189, 90, 143, 39, 137, 168, 162, 80, 107, 103, 221, 173, 241, 224, 187, 185, 24, 10, 158, 112, 179, 215, 31, 72, 55, 197, 149, 197, 242, 182, 163, 6, 253, 192, 97, 85, 144, 179, 158, 1, 60, 177, 103, 78, 222, 58, 7, 149, 232, 195, 84, 172, 70, 119, 37, 9, 28, 191, 38, 183, 180, 123, 115, 20, 251, 126, 34, 222, 157, 34, 174, 139, 121, 86, 110, 131, 90, 167, 139, 87, 152, 178, 146, 57, 102, 204, 158, 191, 78, 12, 32, 66, 48, 28, 79, 215, 49, 210, 148, 195, 75, 178, 252, 201, 155, 104, 176, 251, 90, 94, 158, 114, 217, 86, 73, 53, 105, 200, 119, 175, 218, 113, 92, 209, 134, 98, 113, 237, 111, 156, 169, 232, 190, 182, 176, 137, 138, 215, 30, 237, 24, 112, 10, 40, 9, 5, 185, 55, 253, 199, 90, 15, 227, 71, 32, 170, 239, 123, 75, 244, 119, 145, 90, 71, 41, 211, 244, 201, 113, 151, 103, 222, 170, 102, 212, 219, 155, 160, 229, 78, 4, 61, 11, 229, 112, 47, 133, 101, 246, 248, 145, 1, 173, 86, 112, 34, 169, 201, 113, 181, 42, 94, 105, 80, 142, 220, 61, 49, 6, 85, 94, 149, 79, 190, 41, 216, 51, 246, 91, 135, 223, 200, 139, 179, 16, 100, 179, 80, 159, 3, 139, 149, 90, 119, 142, 151, 168, 80, 244, 203, 157, 1, 34, 21, 200, 38, 92, 159, 218, 146, 61, 180, 190, 42, 239, 116, 117, 108, 180, 230, 249, 78, 170, 70, 25, 108, 42, 150, 236, 173, 71, 33, 95, 230, 170, 112, 180, 38, 141, 200, 115, 230, 112, 251, 193, 37, 14, 138, 228, 205, 133, 1, 181, 217, 4, 54, 170, 179, 55, 90, 228, 219, 187, 11, 130, 121, 110, 242, 235, 181, 94, 23, 94, 189, 30, 15, 217, 48, 25, 141, 84, 95, 244, 156, 82, 145, 181, 181, 92, 126, 246, 220, 181, 186, 206, 113, 63, 170, 23, 124, 89, 49, 96, 155, 232, 173, 80, 112, 246, 233, 252, 56, 190, 242, 101, 64, 182, 180, 51, 82, 207, 162, 118, 116, 36, 201, 221, 70, 212, 207, 79, 218, 120, 247, 214, 92, 122, 38, 144, 46, 229, 186, 101, 55, 226, 222, 232, 151, 50, 237, 10, 252, 249, 38, 207, 61, 96, 21, 90, 188, 34, 204, 166, 243, 132, 209, 102, 114, 206, 123, 79, 82, 148, 82, 222, 18, 76, 249, 99, 223, 60, 49, 157, 108, 46, 127, 199, 218, 94, 183, 33, 159, 185, 141, 118, 72, 142, 142, 234, 104, 232, 139, 1, 1, 11, 85, 85, 223, 74, 53, 213, 78, 129, 53, 71, 66, 139, 235, 46, 93, 225, 131, 147, 72, 9, 202, 54, 214, 16, 191, 151, 214, 203, 10, 245, 42, 74, 134, 105, 72, 8, 121, 190, 163, 210, 242, 178, 204, 72, 125, 11, 12, 136, 149, 240, 181, 118, 239, 230, 195, 224, 29, 218, 41, 49, 203, 230, 143, 77, 63, 133, 240, 169, 155, 46, 126, 86, 187, 197, 196, 209, 168, 17, 119, 73, 252, 11, 119, 185, 248, 142, 55, 157, 18, 242, 126, 188, 182, 199, 91, 166, 68, 12, 184, 230, 51, 225, 162, 202, 206, 58, 158, 200, 245, 220, 114, 219, 170, 102, 192, 223, 104, 181, 61, 51, 255, 215, 100, 119, 222, 254, 170, 36, 140, 89, 53, 29, 157, 48, 232, 112, 79, 203, 9, 59, 56, 5, 3, 5, 36, 172, 147, 18, 131, 138, 118, 24, 20, 121, 157, 244, 128, 166, 31, 75, 218, 127, 7, 74, 146, 128, 1, 247, 67, 207, 252, 0, 250, 130, 99, 201 ], "type": "Buffer" }, "source": "./objects/e1/0ebb90d03eaacca84de1af0a59b444232da99e"}`,
  'readObject from packfile 1': `{ "format": "content", "object": { "data": [ 116, 114, 101, 101, 32, 52, 100, 49, 54, 54, 101, 50, 54, 102, 99, 102, 57, 102, 101, 55, 98, 50, 49, 56, 54, 51, 52, 51, 54, 49, 51, 55, 99, 52, 52, 97, 51, 57, 97, 50, 49, 97, 57, 48, 102, 10, 112, 97, 114, 101, 110, 116, 32, 102, 98, 100, 53, 54, 98, 52, 57, 100, 52, 48, 48, 97, 49, 57, 101, 101, 49, 56, 53, 97, 101, 55, 51, 53, 52, 49, 55, 98, 100, 98, 51, 52, 99, 48, 56, 52, 54, 50, 49, 10, 97, 117, 116, 104, 111, 114, 32, 87, 105, 108, 108, 105, 97, 109, 32, 72, 105, 108, 116, 111, 110, 32, 60, 119, 109, 104, 105, 108, 116, 111, 110, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109, 62, 32, 49, 53, 48, 56, 50, 48, 52, 48, 49, 51, 32, 45, 48, 52, 48, 48, 10, 99, 111, 109, 109, 105, 116, 116, 101, 114, 32, 87, 105, 108, 108, 105, 97, 109, 32, 72, 105, 108, 116, 111, 110, 32, 60, 119, 109, 104, 105, 108, 116, 111, 110, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109, 62, 32, 49, 53, 48, 56, 50, 48, 52, 48, 49, 51, 32, 45, 48, 52, 48, 48, 10, 10, 105, 110, 100, 101, 120, 32, 111, 110, 32, 109, 97, 115, 116, 101, 114, 58, 32, 102, 98, 100, 53, 54, 98, 52, 32, 65, 100, 100, 32, 39, 117, 110, 112, 107, 103, 39, 32, 107, 101, 121, 32, 116, 111, 32, 112, 97, 99, 107, 97, 103, 101, 46, 106, 115, 111, 110, 10 ], "type": "Buffer" }, "source": "./objects/pack/pack-1a1e70d2f116e8cb0cb42d26019e5c7d0eb01888.pack", "type": "commit"}`
}