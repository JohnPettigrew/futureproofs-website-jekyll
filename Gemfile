source "https://rubygems.org"

ruby "~>2.6"

gem "jekyll", "~>4.1.1"

group :jekyll_plugins do
  gem 'jekyll-gzip'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Security patches
gem 'addressable', '~> 2.8.0'

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
