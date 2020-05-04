# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2020-04-25

### Added

- Create package.json
- Setup .gitignore
- Add a CHANGELOG.md
- Add a Readme.md and a Contributing.md
- Add Styleguidist
- Add ESLint
- Add Stylelint
- Tests
- Build System

## [0.1.1] - 2020-04-29

### Fixed

- Rollup configuration to export amd, umd and esm modules

## [0.1.2] - 2020-04-29

### Fixed

- Wrong index.js export

## [0.1.3] - 2020-04-29

### Fixed

- Exporting only CJS modules

## [0.2.0] - 2020-04-30

### Added

- isPhoneUK
- isPhoneUSA
- Better travis configuration

## [0.2.1] - 2020-04-30

### Fixed

- Fixing the empty dist directory issue (actually, first attempt)

## [0.2.2] - 2020-04-30

### Fixed

- Fixing the empty dist directory issue (second attempt)

## [0.2.3] - 2020-04-30

### Fixed

- Fixing the empty dist directory issue (for real this time)

## [0.3.0] - 2020-05-01

### Added

- isPhone validator

## [0.4.0] - 2020-05-01

### Added

- equals and arrayOf 

## [0.5.0] - 2020-05-02

### Added

- maximum, minimum and ofUniqueItems validators

### Fixed

- equals

## [0.5.1] - 2020-05-02

### Fixed

- equals tests and removed useless validators


## [0.6.0] - 2020-05-03

### Added

- isNumeric and isDateFormat

## [0.7.0] - 2020-05-03

### Added

- `isNumeric` and `isDateFormat` tests
- `contains` improved

## [0.7.1] - 2020-05-03

### Changed

- README.md files
- arrayOf renamed to arrayOfShape

## [0.8.0] - 2020-05-04

### Added

- `ofClass` validator
- `arrayOf` validator
- `isBuffer` validator
- `isError` validator
- `isInt8Array` validator
- `isMap` validator
- `isSet` validator
- `isUInt8Array` validator
- `isWeakMap` validator
- `isWeakSet` validator

###

- README.md files
- rewrote all the type checking validator based on `ofClass`;
