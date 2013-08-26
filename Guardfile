# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'sprockets', :destination => 'public/assets', :asset_paths => ['assets/images', 'assets/javascripts', 'assets/stylesheets', 'vendor/javascripts'] do
  watch (%r{(assets|vendor)\/javascripts\/.*}){ |m| "public/assets/index.js" }
  watch (%r{(assets|vendor)\/stylesheets\/.*}){ |m| "public/assets/index.css" }
  watch (%r{(assets|vendor)\/images\/.*})
end

guard 'livereload' do
  # App
  watch(%r{server.rb})

  # Static files
  watch(%r{public\/.*})
end

